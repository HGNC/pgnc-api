import { MigrationInterface, QueryRunner } from 'typeorm';

export class FirstMigration1734698346261 implements MigrationInterface {
    name = 'FirstMigration1734698346261';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "external_resource" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_f8ac822fbed55d3cedc7f9f36c0" UNIQUE ("name"), CONSTRAINT "PK_f0b7f6144dbf34757c79dd8adb6" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."location_coordsystem_enum" AS ENUM('chromosome', 'scaffold', 'lrg', 'contig')`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."location_type_enum" AS ENUM('primary assembly', 'non-nuclear', 'non-reference', 'patch', 'alternate reference')`,
        );
        await queryRunner.query(
            `CREATE TABLE "location" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "refseqAccession" character varying(255), "genbankAccession" character varying(255), "coordSystem" "public"."location_coordsystem_enum" NOT NULL DEFAULT 'chromosome', "type" "public"."location_type_enum" NOT NULL DEFAULT 'primary assembly', CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."gene_has_location_status_enum" AS ENUM('internal', 'withdrawn', 'public')`,
        );
        await queryRunner.query(
            `CREATE TABLE "gene_has_location" ("geneId" integer NOT NULL, "locationId" integer NOT NULL, "status" "public"."gene_has_location_status_enum" NOT NULL DEFAULT 'internal', "creationDate" TIMESTAMP NOT NULL DEFAULT now(), "modDate" TIMESTAMP NOT NULL DEFAULT now(), "withdrawnDate" TIMESTAMP, "creatorId" integer, "editorId" integer, "gene_id" integer, "location_id" integer, CONSTRAINT "PK_a7e208de7ea1db6e1954ce31a98" PRIMARY KEY ("geneId", "locationId"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "name" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "UQ_7a3ed7dc473c4edd10b37236db1" UNIQUE ("name"), CONSTRAINT "PK_86c85ab0235bbe92757ce7a8f57" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."gene_has_name_type_enum" AS ENUM('approved', 'alias', 'previous')`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."gene_has_name_status_enum" AS ENUM('internal', 'withdrawn', 'public')`,
        );
        await queryRunner.query(
            `CREATE TABLE "gene_has_name" ("geneId" integer NOT NULL, "nameId" integer NOT NULL, "type" "public"."gene_has_name_type_enum" NOT NULL DEFAULT 'alias', "status" "public"."gene_has_name_status_enum" NOT NULL DEFAULT 'internal', "creationDate" TIMESTAMP NOT NULL DEFAULT now(), "modDate" TIMESTAMP NOT NULL DEFAULT now(), "withdrawnDate" TIMESTAMP, "gene_id" integer, "name_id" integer, "creatorId" integer, "editorId" integer, CONSTRAINT "PK_d9d04eddde0506547e19b27f2c3" PRIMARY KEY ("geneId", "nameId"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "note" ("id" SERIAL NOT NULL, "note" text NOT NULL, CONSTRAINT "UQ_3e84467988a6e1a32109cf06ce5" UNIQUE ("note"), CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."gene_has_note_status_enum" AS ENUM('internal', 'withdrawn', 'public')`,
        );
        await queryRunner.query(
            `CREATE TABLE "gene_has_note" ("geneId" integer NOT NULL, "noteId" integer NOT NULL, "status" "public"."gene_has_note_status_enum" NOT NULL DEFAULT 'internal', "creationDate" TIMESTAMP NOT NULL DEFAULT now(), "withdrawnDate" TIMESTAMP, "gene_id" integer, "note_id" integer, "creatorId" integer, "editorId" integer, CONSTRAINT "PK_442af6e88c984aee93d759cbaf5" PRIMARY KEY ("geneId", "noteId"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "gene_replacement" ("previousId" integer NOT NULL, "replacementId" integer NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), "editorId" integer NOT NULL, "previous_id" integer NOT NULL, "replacement_id" integer NOT NULL, CONSTRAINT "PK_6ee2a378966fd3d919daf3e9134" PRIMARY KEY ("previousId", "replacementId"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "symbol" ("id" SERIAL NOT NULL, "symbol" character varying(45) NOT NULL, CONSTRAINT "UQ_6ff45711b8039a68a3f43dcb7a8" UNIQUE ("symbol"), CONSTRAINT "PK_d1373cd631624b100a81a545dee" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."gene_has_symbol_type_enum" AS ENUM('approved', 'alias', 'previous')`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."gene_has_symbol_status_enum" AS ENUM('internal', 'withdrawn', 'public')`,
        );
        await queryRunner.query(
            `CREATE TABLE "gene_has_symbol" ("geneId" integer NOT NULL, "symbolId" integer NOT NULL, "type" "public"."gene_has_symbol_type_enum" NOT NULL DEFAULT 'alias', "status" "public"."gene_has_symbol_status_enum" NOT NULL DEFAULT 'internal', "creationDate" TIMESTAMP NOT NULL DEFAULT now(), "modDate" TIMESTAMP NOT NULL DEFAULT now(), "withdrawnDate" TIMESTAMP, "gene_id" integer, "symbol_id" integer, "creatorId" integer, "editorId" integer, CONSTRAINT "PK_4bcdded93c0d52cdaecdea106fb" PRIMARY KEY ("geneId", "symbolId"))`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."role_name_enum" AS ENUM('admin', 'user', 'curator', 'master')`,
        );
        await queryRunner.query(
            `CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" "public"."role_name_enum" NOT NULL DEFAULT 'user', CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "user" ("id" SERIAL NOT NULL, "displayName" character varying(96) NOT NULL, "firstName" character varying(96) NOT NULL, "lastName" character varying(96), "email" character varying(255) NOT NULL, "current" boolean NOT NULL DEFAULT true, "password" character varying(70) NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "assembly" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "genbankAccession" character varying(128) NOT NULL, "refseqAccession" character varying(128) NOT NULL, "current" boolean NOT NULL DEFAULT true, "pgncDefault" boolean NOT NULL DEFAULT true, "speciesId" integer, CONSTRAINT "PK_0090e0222a7d1b882e4f0379f5c" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "species" ("id" SERIAL NOT NULL, "commonName" character varying(128) NOT NULL, "scientificName" character varying(40) NOT NULL, CONSTRAINT "PK_ae6a87f2423ba6c25dc43c32770" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "locus_group" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, CONSTRAINT "UQ_66838eba1b3d9271115e16d7df0" UNIQUE ("name"), CONSTRAINT "PK_c9f33f4d66549c6c2e1ec359975" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "locus_type" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "locusGroupId" integer, CONSTRAINT "UQ_a2716134c37b21bd387b45e96fa" UNIQUE ("name"), CONSTRAINT "PK_5f9f309146489a05c2f610cdbe5" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."gene_has_locus_type_status_enum" AS ENUM('internal', 'withdrawn', 'public')`,
        );
        await queryRunner.query(
            `CREATE TABLE "gene_has_locus_type" ("geneId" integer NOT NULL, "locusTypeId" integer NOT NULL, "status" "public"."gene_has_locus_type_status_enum" NOT NULL DEFAULT 'internal', "creationDate" TIMESTAMP NOT NULL DEFAULT now(), "withdrawnDate" TIMESTAMP, "modDate" TIMESTAMP NOT NULL DEFAULT now(), "gene_id" integer, "locus_type_id" integer, "creatorId" integer, "editorId" integer, CONSTRAINT "PK_6638de3c297ecc64b6e766621cc" PRIMARY KEY ("geneId", "locusTypeId"))`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."gene_status_enum" AS ENUM('internal', 'approved', 'withdrawn', 'review', 'merged', 'split')`,
        );
        await queryRunner.query(
            `CREATE TABLE "gene" ("id" SERIAL NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "modDate" TIMESTAMP NOT NULL DEFAULT now(), "withdrawnDate" TIMESTAMP, "status" "public"."gene_status_enum" NOT NULL DEFAULT 'internal', "mod_id" character varying(16), "speciesId" integer NOT NULL, "creatorId" integer, "editorId" integer, CONSTRAINT "UQ_3786aa5059edde00b098ffbd5e8" UNIQUE ("mod_id"), CONSTRAINT "PK_4e34ff42a9f8bc7e59b7cb2f278" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."gene_has_xref_status_enum" AS ENUM('internal', 'withdrawn', 'public')`,
        );
        await queryRunner.query(
            `CREATE TABLE "gene_has_xref" ("geneId" integer NOT NULL, "xrefId" integer NOT NULL, "status" "public"."gene_has_xref_status_enum" NOT NULL DEFAULT 'internal', "creationDate" TIMESTAMP NOT NULL DEFAULT now(), "modDate" TIMESTAMP NOT NULL DEFAULT now(), "withdrawnDate" TIMESTAMP, "source" character varying(10) NOT NULL DEFAULT 'curator', "xref_id" integer, "creatorId" integer, "editorId" integer, "gene_id" integer, CONSTRAINT "PK_ce88b1342616e4cc12fd29852c9" PRIMARY KEY ("geneId", "xrefId"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "xref" ("id" SERIAL NOT NULL, "displayId" character varying(30) NOT NULL, "externalResourceId" integer, CONSTRAINT "UQ_84622641853573ba4670c49bd76" UNIQUE ("displayId"), CONSTRAINT "PK_e0e7d812f2200cd66368fc686d0" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "gene_history" ("id" SERIAL NOT NULL, "pre_update_value" character varying(255) NOT NULL, "post_update_value" character varying(255) NOT NULL, "field" character varying(30) NOT NULL, "update_date" TIMESTAMP NOT NULL DEFAULT now(), "editorId" integer, "geneId" integer, CONSTRAINT "PK_0412a687da4e010c8df70315f0f" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "user_has_role" ("userId" integer NOT NULL, "roleId" integer NOT NULL, CONSTRAINT "PK_0b5fff779d56c5f29e17af0e7f5" PRIMARY KEY ("userId", "roleId"))`,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_722a6208eab4958546b47bb0d4" ON "user_has_role" ("userId") `,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_24d733d67b9c2b19db7bf34b51" ON "user_has_role" ("roleId") `,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_location" ADD CONSTRAINT "FK_1679f75794eea76afa1b9bbcdb1" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_location" ADD CONSTRAINT "FK_97109de46c076b4a08c0feb7dcd" FOREIGN KEY ("editorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_location" ADD CONSTRAINT "FK_b526800ca7dac1bb1ae09651d77" FOREIGN KEY ("gene_id") REFERENCES "gene"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_location" ADD CONSTRAINT "FK_37491243859f668e4c42135a280" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_name" ADD CONSTRAINT "FK_d7e63ed84af1648105fbce487c2" FOREIGN KEY ("gene_id") REFERENCES "gene"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_name" ADD CONSTRAINT "FK_8150b707d94fd135a4584477aea" FOREIGN KEY ("name_id") REFERENCES "name"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_name" ADD CONSTRAINT "FK_b781878fff23d9dffb20b42e1a6" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_name" ADD CONSTRAINT "FK_a8699b70a5ae3c79a25bd47dbe8" FOREIGN KEY ("editorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_note" ADD CONSTRAINT "FK_343d461ba90ee740ff8f23f09dd" FOREIGN KEY ("gene_id") REFERENCES "gene"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_note" ADD CONSTRAINT "FK_5f11dd160d663df86d668673409" FOREIGN KEY ("note_id") REFERENCES "note"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_note" ADD CONSTRAINT "FK_d6a9f0bdbdd6ae714c24bdd00bb" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_note" ADD CONSTRAINT "FK_4487de79bb012d495fc6e9a52bf" FOREIGN KEY ("editorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_replacement" ADD CONSTRAINT "FK_f1e6e53f6607b65b221c9caa47c" FOREIGN KEY ("editorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_replacement" ADD CONSTRAINT "FK_a3ee051afbff5ac300a7c40b163" FOREIGN KEY ("previous_id") REFERENCES "gene"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_replacement" ADD CONSTRAINT "FK_0f5f276265e3328e32bb3f1b6d4" FOREIGN KEY ("replacement_id") REFERENCES "gene"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_symbol" ADD CONSTRAINT "FK_87f0c4d74a8fdf5bf377017f58b" FOREIGN KEY ("gene_id") REFERENCES "gene"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_symbol" ADD CONSTRAINT "FK_8bb611976bd3cf6e7f3cd15499a" FOREIGN KEY ("symbol_id") REFERENCES "symbol"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_symbol" ADD CONSTRAINT "FK_1bc00aa7067f890921d3c332bef" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_symbol" ADD CONSTRAINT "FK_2d832b8f55010fc12132d46bf3b" FOREIGN KEY ("editorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "assembly" ADD CONSTRAINT "FK_956b26590127758eb726b86b0a0" FOREIGN KEY ("speciesId") REFERENCES "species"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "locus_type" ADD CONSTRAINT "FK_e445d1544f1077430ba99dea4c3" FOREIGN KEY ("locusGroupId") REFERENCES "locus_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_locus_type" ADD CONSTRAINT "FK_6e83696c9aa72628e16f30ae2df" FOREIGN KEY ("gene_id") REFERENCES "gene"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_locus_type" ADD CONSTRAINT "FK_eba7318179bd73e430e7047580b" FOREIGN KEY ("locus_type_id") REFERENCES "locus_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_locus_type" ADD CONSTRAINT "FK_e996da6ff65da0de9f4c3d53250" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_locus_type" ADD CONSTRAINT "FK_2b92b59a0b3e99bda464bd1e323" FOREIGN KEY ("editorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene" ADD CONSTRAINT "FK_86285d1a93ae23b2aef52964ed1" FOREIGN KEY ("speciesId") REFERENCES "species"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene" ADD CONSTRAINT "FK_e8612fb142845e56ff5c3aac099" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene" ADD CONSTRAINT "FK_09c6caa748452c6c920b90eba9c" FOREIGN KEY ("editorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_xref" ADD CONSTRAINT "FK_83fc39225b60be5660ab15e3113" FOREIGN KEY ("xref_id") REFERENCES "xref"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_xref" ADD CONSTRAINT "FK_06b9251df68ee860ae34317a155" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_xref" ADD CONSTRAINT "FK_5513f1d119da8a76626cee70753" FOREIGN KEY ("editorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_xref" ADD CONSTRAINT "FK_7c136e15b34a634fa9b04ae87a6" FOREIGN KEY ("gene_id") REFERENCES "gene"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "xref" ADD CONSTRAINT "FK_710037cd5198eb89e3dd63d6da7" FOREIGN KEY ("externalResourceId") REFERENCES "external_resource"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_history" ADD CONSTRAINT "FK_7cd50d9995fbafb891b57972be3" FOREIGN KEY ("editorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_history" ADD CONSTRAINT "FK_1e0f8717fea6d4fab7ef9b7c0f5" FOREIGN KEY ("geneId") REFERENCES "gene"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "user_has_role" ADD CONSTRAINT "FK_722a6208eab4958546b47bb0d41" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
        );
        await queryRunner.query(
            `ALTER TABLE "user_has_role" ADD CONSTRAINT "FK_24d733d67b9c2b19db7bf34b518" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "user_has_role" DROP CONSTRAINT "FK_24d733d67b9c2b19db7bf34b518"`,
        );
        await queryRunner.query(
            `ALTER TABLE "user_has_role" DROP CONSTRAINT "FK_722a6208eab4958546b47bb0d41"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_history" DROP CONSTRAINT "FK_1e0f8717fea6d4fab7ef9b7c0f5"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_history" DROP CONSTRAINT "FK_7cd50d9995fbafb891b57972be3"`,
        );
        await queryRunner.query(
            `ALTER TABLE "xref" DROP CONSTRAINT "FK_710037cd5198eb89e3dd63d6da7"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_xref" DROP CONSTRAINT "FK_7c136e15b34a634fa9b04ae87a6"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_xref" DROP CONSTRAINT "FK_5513f1d119da8a76626cee70753"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_xref" DROP CONSTRAINT "FK_06b9251df68ee860ae34317a155"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_xref" DROP CONSTRAINT "FK_83fc39225b60be5660ab15e3113"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene" DROP CONSTRAINT "FK_09c6caa748452c6c920b90eba9c"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene" DROP CONSTRAINT "FK_e8612fb142845e56ff5c3aac099"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene" DROP CONSTRAINT "FK_86285d1a93ae23b2aef52964ed1"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_locus_type" DROP CONSTRAINT "FK_2b92b59a0b3e99bda464bd1e323"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_locus_type" DROP CONSTRAINT "FK_e996da6ff65da0de9f4c3d53250"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_locus_type" DROP CONSTRAINT "FK_eba7318179bd73e430e7047580b"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_locus_type" DROP CONSTRAINT "FK_6e83696c9aa72628e16f30ae2df"`,
        );
        await queryRunner.query(
            `ALTER TABLE "locus_type" DROP CONSTRAINT "FK_e445d1544f1077430ba99dea4c3"`,
        );
        await queryRunner.query(
            `ALTER TABLE "assembly" DROP CONSTRAINT "FK_956b26590127758eb726b86b0a0"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_symbol" DROP CONSTRAINT "FK_2d832b8f55010fc12132d46bf3b"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_symbol" DROP CONSTRAINT "FK_1bc00aa7067f890921d3c332bef"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_symbol" DROP CONSTRAINT "FK_8bb611976bd3cf6e7f3cd15499a"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_symbol" DROP CONSTRAINT "FK_87f0c4d74a8fdf5bf377017f58b"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_replacement" DROP CONSTRAINT "FK_0f5f276265e3328e32bb3f1b6d4"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_replacement" DROP CONSTRAINT "FK_a3ee051afbff5ac300a7c40b163"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_replacement" DROP CONSTRAINT "FK_f1e6e53f6607b65b221c9caa47c"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_note" DROP CONSTRAINT "FK_4487de79bb012d495fc6e9a52bf"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_note" DROP CONSTRAINT "FK_d6a9f0bdbdd6ae714c24bdd00bb"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_note" DROP CONSTRAINT "FK_5f11dd160d663df86d668673409"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_note" DROP CONSTRAINT "FK_343d461ba90ee740ff8f23f09dd"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_name" DROP CONSTRAINT "FK_a8699b70a5ae3c79a25bd47dbe8"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_name" DROP CONSTRAINT "FK_b781878fff23d9dffb20b42e1a6"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_name" DROP CONSTRAINT "FK_8150b707d94fd135a4584477aea"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_name" DROP CONSTRAINT "FK_d7e63ed84af1648105fbce487c2"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_location" DROP CONSTRAINT "FK_37491243859f668e4c42135a280"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_location" DROP CONSTRAINT "FK_b526800ca7dac1bb1ae09651d77"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_location" DROP CONSTRAINT "FK_97109de46c076b4a08c0feb7dcd"`,
        );
        await queryRunner.query(
            `ALTER TABLE "gene_has_location" DROP CONSTRAINT "FK_1679f75794eea76afa1b9bbcdb1"`,
        );
        await queryRunner.query(
            `DROP INDEX "public"."IDX_24d733d67b9c2b19db7bf34b51"`,
        );
        await queryRunner.query(
            `DROP INDEX "public"."IDX_722a6208eab4958546b47bb0d4"`,
        );
        await queryRunner.query(`DROP TABLE "user_has_role"`);
        await queryRunner.query(`DROP TABLE "gene_history"`);
        await queryRunner.query(`DROP TABLE "xref"`);
        await queryRunner.query(`DROP TABLE "gene_has_xref"`);
        await queryRunner.query(
            `DROP TYPE "public"."gene_has_xref_status_enum"`,
        );
        await queryRunner.query(`DROP TABLE "gene"`);
        await queryRunner.query(`DROP TYPE "public"."gene_status_enum"`);
        await queryRunner.query(`DROP TABLE "gene_has_locus_type"`);
        await queryRunner.query(
            `DROP TYPE "public"."gene_has_locus_type_status_enum"`,
        );
        await queryRunner.query(`DROP TABLE "locus_type"`);
        await queryRunner.query(`DROP TABLE "locus_group"`);
        await queryRunner.query(`DROP TABLE "species"`);
        await queryRunner.query(`DROP TABLE "assembly"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TYPE "public"."role_name_enum"`);
        await queryRunner.query(`DROP TABLE "gene_has_symbol"`);
        await queryRunner.query(
            `DROP TYPE "public"."gene_has_symbol_status_enum"`,
        );
        await queryRunner.query(
            `DROP TYPE "public"."gene_has_symbol_type_enum"`,
        );
        await queryRunner.query(`DROP TABLE "symbol"`);
        await queryRunner.query(`DROP TABLE "gene_replacement"`);
        await queryRunner.query(`DROP TABLE "gene_has_note"`);
        await queryRunner.query(
            `DROP TYPE "public"."gene_has_note_status_enum"`,
        );
        await queryRunner.query(`DROP TABLE "note"`);
        await queryRunner.query(`DROP TABLE "gene_has_name"`);
        await queryRunner.query(
            `DROP TYPE "public"."gene_has_name_status_enum"`,
        );
        await queryRunner.query(`DROP TYPE "public"."gene_has_name_type_enum"`);
        await queryRunner.query(`DROP TABLE "name"`);
        await queryRunner.query(`DROP TABLE "gene_has_location"`);
        await queryRunner.query(
            `DROP TYPE "public"."gene_has_location_status_enum"`,
        );
        await queryRunner.query(`DROP TABLE "location"`);
        await queryRunner.query(`DROP TYPE "public"."location_type_enum"`);
        await queryRunner.query(
            `DROP TYPE "public"."location_coordsystem_enum"`,
        );
        await queryRunner.query(`DROP TABLE "external_resource"`);
    }
}
