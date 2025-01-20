import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { roleName } from './enum/role-name.enum';

/**
 * Role entity to store role information.
 */
@Entity()
export class Role {
  /**
   * Role ID. Primary key.
   */
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  /**
   * Role name. Unique.
   */
  @Column({
    type: 'enum',
    enum: roleName,
    nullable: false,
    default: roleName.USER,
    unique: true,
  })
  role: string;

  /**
   * Users with this role. Many-to-many relationship. Cascade on delete.
   */
  @ManyToMany(() => User, (user) => user.roles, {
    onDelete: 'CASCADE',
  })
  users: User[];
}
