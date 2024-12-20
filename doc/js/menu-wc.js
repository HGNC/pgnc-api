'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pgnc-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-9d8784d1c34f9654f43572211b5fddc76e1648cc3c0bda375ed62fb0eaa9cc23ec080521807f4c8a1c692e99fd11ceed440a089dfa835d56c660f8d0c9a391b5"' : 'data-bs-target="#xs-injectables-links-module-AppModule-9d8784d1c34f9654f43572211b5fddc76e1648cc3c0bda375ed62fb0eaa9cc23ec080521807f4c8a1c692e99fd11ceed440a089dfa835d56c660f8d0c9a391b5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9d8784d1c34f9654f43572211b5fddc76e1648cc3c0bda375ed62fb0eaa9cc23ec080521807f4c8a1c692e99fd11ceed440a089dfa835d56c660f8d0c9a391b5"' :
                                        'id="xs-injectables-links-module-AppModule-9d8784d1c34f9654f43572211b5fddc76e1648cc3c0bda375ed62fb0eaa9cc23ec080521807f4c8a1c692e99fd11ceed440a089dfa835d56c660f8d0c9a391b5"' }>
                                        <li class="link">
                                            <a href="injectables/AdminRoleGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminRoleGuard</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CuratorRoleGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CuratorRoleGuard</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserRoleGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRoleGuard</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AssemblyModule.html" data-type="entity-link" >AssemblyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AssemblyModule-4dc3515b407de0edadc818ebaaf205d8e7f91fa404fe2da414fc19f2ab27b61b38d4d8bb06422f6c6c52a5f2d6e5dcbc59a575660a2e12e5bab089738f4fbdf3"' : 'data-bs-target="#xs-controllers-links-module-AssemblyModule-4dc3515b407de0edadc818ebaaf205d8e7f91fa404fe2da414fc19f2ab27b61b38d4d8bb06422f6c6c52a5f2d6e5dcbc59a575660a2e12e5bab089738f4fbdf3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AssemblyModule-4dc3515b407de0edadc818ebaaf205d8e7f91fa404fe2da414fc19f2ab27b61b38d4d8bb06422f6c6c52a5f2d6e5dcbc59a575660a2e12e5bab089738f4fbdf3"' :
                                            'id="xs-controllers-links-module-AssemblyModule-4dc3515b407de0edadc818ebaaf205d8e7f91fa404fe2da414fc19f2ab27b61b38d4d8bb06422f6c6c52a5f2d6e5dcbc59a575660a2e12e5bab089738f4fbdf3"' }>
                                            <li class="link">
                                                <a href="controllers/AssemblyController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssemblyController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AssemblyModule-4dc3515b407de0edadc818ebaaf205d8e7f91fa404fe2da414fc19f2ab27b61b38d4d8bb06422f6c6c52a5f2d6e5dcbc59a575660a2e12e5bab089738f4fbdf3"' : 'data-bs-target="#xs-injectables-links-module-AssemblyModule-4dc3515b407de0edadc818ebaaf205d8e7f91fa404fe2da414fc19f2ab27b61b38d4d8bb06422f6c6c52a5f2d6e5dcbc59a575660a2e12e5bab089738f4fbdf3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AssemblyModule-4dc3515b407de0edadc818ebaaf205d8e7f91fa404fe2da414fc19f2ab27b61b38d4d8bb06422f6c6c52a5f2d6e5dcbc59a575660a2e12e5bab089738f4fbdf3"' :
                                        'id="xs-injectables-links-module-AssemblyModule-4dc3515b407de0edadc818ebaaf205d8e7f91fa404fe2da414fc19f2ab27b61b38d4d8bb06422f6c6c52a5f2d6e5dcbc59a575660a2e12e5bab089738f4fbdf3"' }>
                                        <li class="link">
                                            <a href="injectables/AssemblyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssemblyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-6a0a8687de58df7c1cc904701da5289037a1823ace8530f4c9ec0c4cb147e499f302e29ccedffc6b21f370985a7197dc623216ec0c50aacbdf370f6891a606bc"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-6a0a8687de58df7c1cc904701da5289037a1823ace8530f4c9ec0c4cb147e499f302e29ccedffc6b21f370985a7197dc623216ec0c50aacbdf370f6891a606bc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-6a0a8687de58df7c1cc904701da5289037a1823ace8530f4c9ec0c4cb147e499f302e29ccedffc6b21f370985a7197dc623216ec0c50aacbdf370f6891a606bc"' :
                                            'id="xs-controllers-links-module-AuthModule-6a0a8687de58df7c1cc904701da5289037a1823ace8530f4c9ec0c4cb147e499f302e29ccedffc6b21f370985a7197dc623216ec0c50aacbdf370f6891a606bc"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-6a0a8687de58df7c1cc904701da5289037a1823ace8530f4c9ec0c4cb147e499f302e29ccedffc6b21f370985a7197dc623216ec0c50aacbdf370f6891a606bc"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-6a0a8687de58df7c1cc904701da5289037a1823ace8530f4c9ec0c4cb147e499f302e29ccedffc6b21f370985a7197dc623216ec0c50aacbdf370f6891a606bc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-6a0a8687de58df7c1cc904701da5289037a1823ace8530f4c9ec0c4cb147e499f302e29ccedffc6b21f370985a7197dc623216ec0c50aacbdf370f6891a606bc"' :
                                        'id="xs-injectables-links-module-AuthModule-6a0a8687de58df7c1cc904701da5289037a1823ace8530f4c9ec0c4cb147e499f302e29ccedffc6b21f370985a7197dc623216ec0c50aacbdf370f6891a606bc"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GenerateTokensProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenerateTokensProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RefreshTokensProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefreshTokensProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SignInProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExternalResourceModule.html" data-type="entity-link" >ExternalResourceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ExternalResourceModule-d0755dd719ec4df9e78dfffb72546a085816f58fc9d7b7c58acc7aad73b60a072a71e7e214ae3df751f5fca12991f67e96abc36e381bef1e1139eb53b882c1da"' : 'data-bs-target="#xs-controllers-links-module-ExternalResourceModule-d0755dd719ec4df9e78dfffb72546a085816f58fc9d7b7c58acc7aad73b60a072a71e7e214ae3df751f5fca12991f67e96abc36e381bef1e1139eb53b882c1da"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ExternalResourceModule-d0755dd719ec4df9e78dfffb72546a085816f58fc9d7b7c58acc7aad73b60a072a71e7e214ae3df751f5fca12991f67e96abc36e381bef1e1139eb53b882c1da"' :
                                            'id="xs-controllers-links-module-ExternalResourceModule-d0755dd719ec4df9e78dfffb72546a085816f58fc9d7b7c58acc7aad73b60a072a71e7e214ae3df751f5fca12991f67e96abc36e381bef1e1139eb53b882c1da"' }>
                                            <li class="link">
                                                <a href="controllers/ExternalResourceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExternalResourceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ExternalResourceModule-d0755dd719ec4df9e78dfffb72546a085816f58fc9d7b7c58acc7aad73b60a072a71e7e214ae3df751f5fca12991f67e96abc36e381bef1e1139eb53b882c1da"' : 'data-bs-target="#xs-injectables-links-module-ExternalResourceModule-d0755dd719ec4df9e78dfffb72546a085816f58fc9d7b7c58acc7aad73b60a072a71e7e214ae3df751f5fca12991f67e96abc36e381bef1e1139eb53b882c1da"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExternalResourceModule-d0755dd719ec4df9e78dfffb72546a085816f58fc9d7b7c58acc7aad73b60a072a71e7e214ae3df751f5fca12991f67e96abc36e381bef1e1139eb53b882c1da"' :
                                        'id="xs-injectables-links-module-ExternalResourceModule-d0755dd719ec4df9e78dfffb72546a085816f58fc9d7b7c58acc7aad73b60a072a71e7e214ae3df751f5fca12991f67e96abc36e381bef1e1139eb53b882c1da"' }>
                                        <li class="link">
                                            <a href="injectables/ExternalResourceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExternalResourceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GeneHistoryModule.html" data-type="entity-link" >GeneHistoryModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GeneLocusTypeModule.html" data-type="entity-link" >GeneLocusTypeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GeneLocusTypeModule-99392e60870c7288bfe91c2d81fdafcfccd7f09117ada8e0860b5234583d83290ee579308007218591ed9053427a6340ffa8b015f487d679631031884f0ab0af"' : 'data-bs-target="#xs-controllers-links-module-GeneLocusTypeModule-99392e60870c7288bfe91c2d81fdafcfccd7f09117ada8e0860b5234583d83290ee579308007218591ed9053427a6340ffa8b015f487d679631031884f0ab0af"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GeneLocusTypeModule-99392e60870c7288bfe91c2d81fdafcfccd7f09117ada8e0860b5234583d83290ee579308007218591ed9053427a6340ffa8b015f487d679631031884f0ab0af"' :
                                            'id="xs-controllers-links-module-GeneLocusTypeModule-99392e60870c7288bfe91c2d81fdafcfccd7f09117ada8e0860b5234583d83290ee579308007218591ed9053427a6340ffa8b015f487d679631031884f0ab0af"' }>
                                            <li class="link">
                                                <a href="controllers/GeneLocusTypeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneLocusTypeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GeneLocusTypeModule-99392e60870c7288bfe91c2d81fdafcfccd7f09117ada8e0860b5234583d83290ee579308007218591ed9053427a6340ffa8b015f487d679631031884f0ab0af"' : 'data-bs-target="#xs-injectables-links-module-GeneLocusTypeModule-99392e60870c7288bfe91c2d81fdafcfccd7f09117ada8e0860b5234583d83290ee579308007218591ed9053427a6340ffa8b015f487d679631031884f0ab0af"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GeneLocusTypeModule-99392e60870c7288bfe91c2d81fdafcfccd7f09117ada8e0860b5234583d83290ee579308007218591ed9053427a6340ffa8b015f487d679631031884f0ab0af"' :
                                        'id="xs-injectables-links-module-GeneLocusTypeModule-99392e60870c7288bfe91c2d81fdafcfccd7f09117ada8e0860b5234583d83290ee579308007218591ed9053427a6340ffa8b015f487d679631031884f0ab0af"' }>
                                        <li class="link">
                                            <a href="injectables/GeneLocusTypeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneLocusTypeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GeneModule.html" data-type="entity-link" >GeneModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GeneModule-2ef6a7552bbfa99de188c08715896361598ad8f6221a278a450433d41ae5727d5ff3b269a811a4062a2fe5dc7b611ee2c2eb9a3bf0649c0fff5ba266cac0198b"' : 'data-bs-target="#xs-controllers-links-module-GeneModule-2ef6a7552bbfa99de188c08715896361598ad8f6221a278a450433d41ae5727d5ff3b269a811a4062a2fe5dc7b611ee2c2eb9a3bf0649c0fff5ba266cac0198b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GeneModule-2ef6a7552bbfa99de188c08715896361598ad8f6221a278a450433d41ae5727d5ff3b269a811a4062a2fe5dc7b611ee2c2eb9a3bf0649c0fff5ba266cac0198b"' :
                                            'id="xs-controllers-links-module-GeneModule-2ef6a7552bbfa99de188c08715896361598ad8f6221a278a450433d41ae5727d5ff3b269a811a4062a2fe5dc7b611ee2c2eb9a3bf0649c0fff5ba266cac0198b"' }>
                                            <li class="link">
                                                <a href="controllers/GeneController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GeneModule-2ef6a7552bbfa99de188c08715896361598ad8f6221a278a450433d41ae5727d5ff3b269a811a4062a2fe5dc7b611ee2c2eb9a3bf0649c0fff5ba266cac0198b"' : 'data-bs-target="#xs-injectables-links-module-GeneModule-2ef6a7552bbfa99de188c08715896361598ad8f6221a278a450433d41ae5727d5ff3b269a811a4062a2fe5dc7b611ee2c2eb9a3bf0649c0fff5ba266cac0198b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GeneModule-2ef6a7552bbfa99de188c08715896361598ad8f6221a278a450433d41ae5727d5ff3b269a811a4062a2fe5dc7b611ee2c2eb9a3bf0649c0fff5ba266cac0198b"' :
                                        'id="xs-injectables-links-module-GeneModule-2ef6a7552bbfa99de188c08715896361598ad8f6221a278a450433d41ae5727d5ff3b269a811a4062a2fe5dc7b611ee2c2eb9a3bf0649c0fff5ba266cac0198b"' }>
                                        <li class="link">
                                            <a href="injectables/CreateGeneProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateGeneProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GeneService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GeneNameModule.html" data-type="entity-link" >GeneNameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GeneNameModule-f590a07fbb5303213930c91a6a12384b9ed4e85205e7093bf3fd0b48034f7cfddde7b19b99d7182d30955aa54a3b053f7dbc84a7b31052ce2212215e67f91c6e"' : 'data-bs-target="#xs-controllers-links-module-GeneNameModule-f590a07fbb5303213930c91a6a12384b9ed4e85205e7093bf3fd0b48034f7cfddde7b19b99d7182d30955aa54a3b053f7dbc84a7b31052ce2212215e67f91c6e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GeneNameModule-f590a07fbb5303213930c91a6a12384b9ed4e85205e7093bf3fd0b48034f7cfddde7b19b99d7182d30955aa54a3b053f7dbc84a7b31052ce2212215e67f91c6e"' :
                                            'id="xs-controllers-links-module-GeneNameModule-f590a07fbb5303213930c91a6a12384b9ed4e85205e7093bf3fd0b48034f7cfddde7b19b99d7182d30955aa54a3b053f7dbc84a7b31052ce2212215e67f91c6e"' }>
                                            <li class="link">
                                                <a href="controllers/GeneNameController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneNameController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GeneNameModule-f590a07fbb5303213930c91a6a12384b9ed4e85205e7093bf3fd0b48034f7cfddde7b19b99d7182d30955aa54a3b053f7dbc84a7b31052ce2212215e67f91c6e"' : 'data-bs-target="#xs-injectables-links-module-GeneNameModule-f590a07fbb5303213930c91a6a12384b9ed4e85205e7093bf3fd0b48034f7cfddde7b19b99d7182d30955aa54a3b053f7dbc84a7b31052ce2212215e67f91c6e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GeneNameModule-f590a07fbb5303213930c91a6a12384b9ed4e85205e7093bf3fd0b48034f7cfddde7b19b99d7182d30955aa54a3b053f7dbc84a7b31052ce2212215e67f91c6e"' :
                                        'id="xs-injectables-links-module-GeneNameModule-f590a07fbb5303213930c91a6a12384b9ed4e85205e7093bf3fd0b48034f7cfddde7b19b99d7182d30955aa54a3b053f7dbc84a7b31052ce2212215e67f91c6e"' }>
                                        <li class="link">
                                            <a href="injectables/GeneNameService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneNameService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GeneNoteModule.html" data-type="entity-link" >GeneNoteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GeneNoteModule-6fd1c37979a48466ac9c3b34716caf534b6c69fa87ef91a6b5b646ce188ca81052de130b7f94c9394501393626062299d6cb6973e6d3d0ea671d48b28d363d94"' : 'data-bs-target="#xs-controllers-links-module-GeneNoteModule-6fd1c37979a48466ac9c3b34716caf534b6c69fa87ef91a6b5b646ce188ca81052de130b7f94c9394501393626062299d6cb6973e6d3d0ea671d48b28d363d94"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GeneNoteModule-6fd1c37979a48466ac9c3b34716caf534b6c69fa87ef91a6b5b646ce188ca81052de130b7f94c9394501393626062299d6cb6973e6d3d0ea671d48b28d363d94"' :
                                            'id="xs-controllers-links-module-GeneNoteModule-6fd1c37979a48466ac9c3b34716caf534b6c69fa87ef91a6b5b646ce188ca81052de130b7f94c9394501393626062299d6cb6973e6d3d0ea671d48b28d363d94"' }>
                                            <li class="link">
                                                <a href="controllers/GeneNoteController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneNoteController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GeneNoteModule-6fd1c37979a48466ac9c3b34716caf534b6c69fa87ef91a6b5b646ce188ca81052de130b7f94c9394501393626062299d6cb6973e6d3d0ea671d48b28d363d94"' : 'data-bs-target="#xs-injectables-links-module-GeneNoteModule-6fd1c37979a48466ac9c3b34716caf534b6c69fa87ef91a6b5b646ce188ca81052de130b7f94c9394501393626062299d6cb6973e6d3d0ea671d48b28d363d94"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GeneNoteModule-6fd1c37979a48466ac9c3b34716caf534b6c69fa87ef91a6b5b646ce188ca81052de130b7f94c9394501393626062299d6cb6973e6d3d0ea671d48b28d363d94"' :
                                        'id="xs-injectables-links-module-GeneNoteModule-6fd1c37979a48466ac9c3b34716caf534b6c69fa87ef91a6b5b646ce188ca81052de130b7f94c9394501393626062299d6cb6973e6d3d0ea671d48b28d363d94"' }>
                                        <li class="link">
                                            <a href="injectables/GeneNoteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneNoteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GeneReplacementModule.html" data-type="entity-link" >GeneReplacementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GeneReplacementModule-5c52dd5ee3facf4f83c12f067efb0d3458a777561dfd5d960f835c2fbcf883a42ba71d6562f699b340ad4c9cf74fb2b451b453e765a027f3171e84f2803a8829"' : 'data-bs-target="#xs-controllers-links-module-GeneReplacementModule-5c52dd5ee3facf4f83c12f067efb0d3458a777561dfd5d960f835c2fbcf883a42ba71d6562f699b340ad4c9cf74fb2b451b453e765a027f3171e84f2803a8829"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GeneReplacementModule-5c52dd5ee3facf4f83c12f067efb0d3458a777561dfd5d960f835c2fbcf883a42ba71d6562f699b340ad4c9cf74fb2b451b453e765a027f3171e84f2803a8829"' :
                                            'id="xs-controllers-links-module-GeneReplacementModule-5c52dd5ee3facf4f83c12f067efb0d3458a777561dfd5d960f835c2fbcf883a42ba71d6562f699b340ad4c9cf74fb2b451b453e765a027f3171e84f2803a8829"' }>
                                            <li class="link">
                                                <a href="controllers/GeneReplacementController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneReplacementController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GeneReplacementModule-5c52dd5ee3facf4f83c12f067efb0d3458a777561dfd5d960f835c2fbcf883a42ba71d6562f699b340ad4c9cf74fb2b451b453e765a027f3171e84f2803a8829"' : 'data-bs-target="#xs-injectables-links-module-GeneReplacementModule-5c52dd5ee3facf4f83c12f067efb0d3458a777561dfd5d960f835c2fbcf883a42ba71d6562f699b340ad4c9cf74fb2b451b453e765a027f3171e84f2803a8829"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GeneReplacementModule-5c52dd5ee3facf4f83c12f067efb0d3458a777561dfd5d960f835c2fbcf883a42ba71d6562f699b340ad4c9cf74fb2b451b453e765a027f3171e84f2803a8829"' :
                                        'id="xs-injectables-links-module-GeneReplacementModule-5c52dd5ee3facf4f83c12f067efb0d3458a777561dfd5d960f835c2fbcf883a42ba71d6562f699b340ad4c9cf74fb2b451b453e765a027f3171e84f2803a8829"' }>
                                        <li class="link">
                                            <a href="injectables/GeneReplacementService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneReplacementService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GeneSymbolModule.html" data-type="entity-link" >GeneSymbolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GeneSymbolModule-a685ab71ff23ae365cd8ebe775568b94b99d04bfe9d6dfa110ea996d1bcd2acd8728ec00dfc2cbe16b56b80d48aefeee88b09a59492ff9f129987ce89244085e"' : 'data-bs-target="#xs-controllers-links-module-GeneSymbolModule-a685ab71ff23ae365cd8ebe775568b94b99d04bfe9d6dfa110ea996d1bcd2acd8728ec00dfc2cbe16b56b80d48aefeee88b09a59492ff9f129987ce89244085e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GeneSymbolModule-a685ab71ff23ae365cd8ebe775568b94b99d04bfe9d6dfa110ea996d1bcd2acd8728ec00dfc2cbe16b56b80d48aefeee88b09a59492ff9f129987ce89244085e"' :
                                            'id="xs-controllers-links-module-GeneSymbolModule-a685ab71ff23ae365cd8ebe775568b94b99d04bfe9d6dfa110ea996d1bcd2acd8728ec00dfc2cbe16b56b80d48aefeee88b09a59492ff9f129987ce89244085e"' }>
                                            <li class="link">
                                                <a href="controllers/GeneSymbolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneSymbolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GeneSymbolModule-a685ab71ff23ae365cd8ebe775568b94b99d04bfe9d6dfa110ea996d1bcd2acd8728ec00dfc2cbe16b56b80d48aefeee88b09a59492ff9f129987ce89244085e"' : 'data-bs-target="#xs-injectables-links-module-GeneSymbolModule-a685ab71ff23ae365cd8ebe775568b94b99d04bfe9d6dfa110ea996d1bcd2acd8728ec00dfc2cbe16b56b80d48aefeee88b09a59492ff9f129987ce89244085e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GeneSymbolModule-a685ab71ff23ae365cd8ebe775568b94b99d04bfe9d6dfa110ea996d1bcd2acd8728ec00dfc2cbe16b56b80d48aefeee88b09a59492ff9f129987ce89244085e"' :
                                        'id="xs-injectables-links-module-GeneSymbolModule-a685ab71ff23ae365cd8ebe775568b94b99d04bfe9d6dfa110ea996d1bcd2acd8728ec00dfc2cbe16b56b80d48aefeee88b09a59492ff9f129987ce89244085e"' }>
                                        <li class="link">
                                            <a href="injectables/GeneSymbolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneSymbolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GeneXrefModule.html" data-type="entity-link" >GeneXrefModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GeneXrefModule-f56974a81d95ac705aa383db31a760cd3ffb8c12e5a14da4e3af67632f5a879fdea837f74879f77c2b8beef3d0fc96a7c07873ddf2ca6752cca56dab05160cbb"' : 'data-bs-target="#xs-controllers-links-module-GeneXrefModule-f56974a81d95ac705aa383db31a760cd3ffb8c12e5a14da4e3af67632f5a879fdea837f74879f77c2b8beef3d0fc96a7c07873ddf2ca6752cca56dab05160cbb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GeneXrefModule-f56974a81d95ac705aa383db31a760cd3ffb8c12e5a14da4e3af67632f5a879fdea837f74879f77c2b8beef3d0fc96a7c07873ddf2ca6752cca56dab05160cbb"' :
                                            'id="xs-controllers-links-module-GeneXrefModule-f56974a81d95ac705aa383db31a760cd3ffb8c12e5a14da4e3af67632f5a879fdea837f74879f77c2b8beef3d0fc96a7c07873ddf2ca6752cca56dab05160cbb"' }>
                                            <li class="link">
                                                <a href="controllers/GeneXrefController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneXrefController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GeneXrefModule-f56974a81d95ac705aa383db31a760cd3ffb8c12e5a14da4e3af67632f5a879fdea837f74879f77c2b8beef3d0fc96a7c07873ddf2ca6752cca56dab05160cbb"' : 'data-bs-target="#xs-injectables-links-module-GeneXrefModule-f56974a81d95ac705aa383db31a760cd3ffb8c12e5a14da4e3af67632f5a879fdea837f74879f77c2b8beef3d0fc96a7c07873ddf2ca6752cca56dab05160cbb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GeneXrefModule-f56974a81d95ac705aa383db31a760cd3ffb8c12e5a14da4e3af67632f5a879fdea837f74879f77c2b8beef3d0fc96a7c07873ddf2ca6752cca56dab05160cbb"' :
                                        'id="xs-injectables-links-module-GeneXrefModule-f56974a81d95ac705aa383db31a760cd3ffb8c12e5a14da4e3af67632f5a879fdea837f74879f77c2b8beef3d0fc96a7c07873ddf2ca6752cca56dab05160cbb"' }>
                                        <li class="link">
                                            <a href="injectables/GeneXrefService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneXrefService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LocationModule.html" data-type="entity-link" >LocationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LocationModule-a02b6c18a5818a89c7425b5d5d740f60a970fbd66b0b3dfcfd3f2d7ba758e4458b4fd5e78b4cfd2835d8612f5e8b7291b01685b6356da10e883ca7227065d53a"' : 'data-bs-target="#xs-controllers-links-module-LocationModule-a02b6c18a5818a89c7425b5d5d740f60a970fbd66b0b3dfcfd3f2d7ba758e4458b4fd5e78b4cfd2835d8612f5e8b7291b01685b6356da10e883ca7227065d53a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LocationModule-a02b6c18a5818a89c7425b5d5d740f60a970fbd66b0b3dfcfd3f2d7ba758e4458b4fd5e78b4cfd2835d8612f5e8b7291b01685b6356da10e883ca7227065d53a"' :
                                            'id="xs-controllers-links-module-LocationModule-a02b6c18a5818a89c7425b5d5d740f60a970fbd66b0b3dfcfd3f2d7ba758e4458b4fd5e78b4cfd2835d8612f5e8b7291b01685b6356da10e883ca7227065d53a"' }>
                                            <li class="link">
                                                <a href="controllers/LocationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LocationModule-a02b6c18a5818a89c7425b5d5d740f60a970fbd66b0b3dfcfd3f2d7ba758e4458b4fd5e78b4cfd2835d8612f5e8b7291b01685b6356da10e883ca7227065d53a"' : 'data-bs-target="#xs-injectables-links-module-LocationModule-a02b6c18a5818a89c7425b5d5d740f60a970fbd66b0b3dfcfd3f2d7ba758e4458b4fd5e78b4cfd2835d8612f5e8b7291b01685b6356da10e883ca7227065d53a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LocationModule-a02b6c18a5818a89c7425b5d5d740f60a970fbd66b0b3dfcfd3f2d7ba758e4458b4fd5e78b4cfd2835d8612f5e8b7291b01685b6356da10e883ca7227065d53a"' :
                                        'id="xs-injectables-links-module-LocationModule-a02b6c18a5818a89c7425b5d5d740f60a970fbd66b0b3dfcfd3f2d7ba758e4458b4fd5e78b4cfd2835d8612f5e8b7291b01685b6356da10e883ca7227065d53a"' }>
                                        <li class="link">
                                            <a href="injectables/LocationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LocusGroupModule.html" data-type="entity-link" >LocusGroupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LocusGroupModule-a75fc452570dc485d4ad6471adf85963d88c17ff20d49128ef2eed203f7a42953372b39bcf3e7f8c83a4225778ce9dc70051e2dea523b7994a99996f5cd27d54"' : 'data-bs-target="#xs-controllers-links-module-LocusGroupModule-a75fc452570dc485d4ad6471adf85963d88c17ff20d49128ef2eed203f7a42953372b39bcf3e7f8c83a4225778ce9dc70051e2dea523b7994a99996f5cd27d54"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LocusGroupModule-a75fc452570dc485d4ad6471adf85963d88c17ff20d49128ef2eed203f7a42953372b39bcf3e7f8c83a4225778ce9dc70051e2dea523b7994a99996f5cd27d54"' :
                                            'id="xs-controllers-links-module-LocusGroupModule-a75fc452570dc485d4ad6471adf85963d88c17ff20d49128ef2eed203f7a42953372b39bcf3e7f8c83a4225778ce9dc70051e2dea523b7994a99996f5cd27d54"' }>
                                            <li class="link">
                                                <a href="controllers/LocusGroupController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocusGroupController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LocusGroupModule-a75fc452570dc485d4ad6471adf85963d88c17ff20d49128ef2eed203f7a42953372b39bcf3e7f8c83a4225778ce9dc70051e2dea523b7994a99996f5cd27d54"' : 'data-bs-target="#xs-injectables-links-module-LocusGroupModule-a75fc452570dc485d4ad6471adf85963d88c17ff20d49128ef2eed203f7a42953372b39bcf3e7f8c83a4225778ce9dc70051e2dea523b7994a99996f5cd27d54"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LocusGroupModule-a75fc452570dc485d4ad6471adf85963d88c17ff20d49128ef2eed203f7a42953372b39bcf3e7f8c83a4225778ce9dc70051e2dea523b7994a99996f5cd27d54"' :
                                        'id="xs-injectables-links-module-LocusGroupModule-a75fc452570dc485d4ad6471adf85963d88c17ff20d49128ef2eed203f7a42953372b39bcf3e7f8c83a4225778ce9dc70051e2dea523b7994a99996f5cd27d54"' }>
                                        <li class="link">
                                            <a href="injectables/LocusGroupService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocusGroupService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LocusTypeModule.html" data-type="entity-link" >LocusTypeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LocusTypeModule-0ca258d55b7e6e8f3e173ed842e9a4656a7f5233f3b03c5475b62a0d4cc6139650f0da7df723fe0a44486408f09b7ad64075a64f398d17d7aa3fe9504ca914f3"' : 'data-bs-target="#xs-controllers-links-module-LocusTypeModule-0ca258d55b7e6e8f3e173ed842e9a4656a7f5233f3b03c5475b62a0d4cc6139650f0da7df723fe0a44486408f09b7ad64075a64f398d17d7aa3fe9504ca914f3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LocusTypeModule-0ca258d55b7e6e8f3e173ed842e9a4656a7f5233f3b03c5475b62a0d4cc6139650f0da7df723fe0a44486408f09b7ad64075a64f398d17d7aa3fe9504ca914f3"' :
                                            'id="xs-controllers-links-module-LocusTypeModule-0ca258d55b7e6e8f3e173ed842e9a4656a7f5233f3b03c5475b62a0d4cc6139650f0da7df723fe0a44486408f09b7ad64075a64f398d17d7aa3fe9504ca914f3"' }>
                                            <li class="link">
                                                <a href="controllers/LocusTypeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocusTypeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LocusTypeModule-0ca258d55b7e6e8f3e173ed842e9a4656a7f5233f3b03c5475b62a0d4cc6139650f0da7df723fe0a44486408f09b7ad64075a64f398d17d7aa3fe9504ca914f3"' : 'data-bs-target="#xs-injectables-links-module-LocusTypeModule-0ca258d55b7e6e8f3e173ed842e9a4656a7f5233f3b03c5475b62a0d4cc6139650f0da7df723fe0a44486408f09b7ad64075a64f398d17d7aa3fe9504ca914f3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LocusTypeModule-0ca258d55b7e6e8f3e173ed842e9a4656a7f5233f3b03c5475b62a0d4cc6139650f0da7df723fe0a44486408f09b7ad64075a64f398d17d7aa3fe9504ca914f3"' :
                                        'id="xs-injectables-links-module-LocusTypeModule-0ca258d55b7e6e8f3e173ed842e9a4656a7f5233f3b03c5475b62a0d4cc6139650f0da7df723fe0a44486408f09b7ad64075a64f398d17d7aa3fe9504ca914f3"' }>
                                        <li class="link">
                                            <a href="injectables/LocusTypeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocusTypeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-0a057019c92dbdb245ba015893b98bd3b11444f60e3875c381223a69206f4abc8655e1182b191e6f1cc24c49e9cf932a8e95715b0f4c5c2cf68fd4a058562d1b"' : 'data-bs-target="#xs-injectables-links-module-MailModule-0a057019c92dbdb245ba015893b98bd3b11444f60e3875c381223a69206f4abc8655e1182b191e6f1cc24c49e9cf932a8e95715b0f4c5c2cf68fd4a058562d1b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-0a057019c92dbdb245ba015893b98bd3b11444f60e3875c381223a69206f4abc8655e1182b191e6f1cc24c49e9cf932a8e95715b0f4c5c2cf68fd4a058562d1b"' :
                                        'id="xs-injectables-links-module-MailModule-0a057019c92dbdb245ba015893b98bd3b11444f60e3875c381223a69206f4abc8655e1182b191e6f1cc24c49e9cf932a8e95715b0f4c5c2cf68fd4a058562d1b"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NameModule.html" data-type="entity-link" >NameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NameModule-660e0052f3b8e4da503c2a58484b10439c2c020e914ab771e94b5bf1431c6e8cb9ef44adf9f3653146345e272cd0d5712e057da823f81e3162d5fa1ff2a9bf5c"' : 'data-bs-target="#xs-controllers-links-module-NameModule-660e0052f3b8e4da503c2a58484b10439c2c020e914ab771e94b5bf1431c6e8cb9ef44adf9f3653146345e272cd0d5712e057da823f81e3162d5fa1ff2a9bf5c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NameModule-660e0052f3b8e4da503c2a58484b10439c2c020e914ab771e94b5bf1431c6e8cb9ef44adf9f3653146345e272cd0d5712e057da823f81e3162d5fa1ff2a9bf5c"' :
                                            'id="xs-controllers-links-module-NameModule-660e0052f3b8e4da503c2a58484b10439c2c020e914ab771e94b5bf1431c6e8cb9ef44adf9f3653146345e272cd0d5712e057da823f81e3162d5fa1ff2a9bf5c"' }>
                                            <li class="link">
                                                <a href="controllers/NameController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NameController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NameModule-660e0052f3b8e4da503c2a58484b10439c2c020e914ab771e94b5bf1431c6e8cb9ef44adf9f3653146345e272cd0d5712e057da823f81e3162d5fa1ff2a9bf5c"' : 'data-bs-target="#xs-injectables-links-module-NameModule-660e0052f3b8e4da503c2a58484b10439c2c020e914ab771e94b5bf1431c6e8cb9ef44adf9f3653146345e272cd0d5712e057da823f81e3162d5fa1ff2a9bf5c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NameModule-660e0052f3b8e4da503c2a58484b10439c2c020e914ab771e94b5bf1431c6e8cb9ef44adf9f3653146345e272cd0d5712e057da823f81e3162d5fa1ff2a9bf5c"' :
                                        'id="xs-injectables-links-module-NameModule-660e0052f3b8e4da503c2a58484b10439c2c020e914ab771e94b5bf1431c6e8cb9ef44adf9f3653146345e272cd0d5712e057da823f81e3162d5fa1ff2a9bf5c"' }>
                                        <li class="link">
                                            <a href="injectables/NameService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NameService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NoteModule.html" data-type="entity-link" >NoteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NoteModule-6b0774bf3359d0a136053b0c88808043aea9fafedded731c6e0f530c9c7cea0ccdd2c0ea52e3a6918e59382b46bf604c6a005f4ea6bd030c0cc0e44d30307ecf"' : 'data-bs-target="#xs-controllers-links-module-NoteModule-6b0774bf3359d0a136053b0c88808043aea9fafedded731c6e0f530c9c7cea0ccdd2c0ea52e3a6918e59382b46bf604c6a005f4ea6bd030c0cc0e44d30307ecf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NoteModule-6b0774bf3359d0a136053b0c88808043aea9fafedded731c6e0f530c9c7cea0ccdd2c0ea52e3a6918e59382b46bf604c6a005f4ea6bd030c0cc0e44d30307ecf"' :
                                            'id="xs-controllers-links-module-NoteModule-6b0774bf3359d0a136053b0c88808043aea9fafedded731c6e0f530c9c7cea0ccdd2c0ea52e3a6918e59382b46bf604c6a005f4ea6bd030c0cc0e44d30307ecf"' }>
                                            <li class="link">
                                                <a href="controllers/NoteController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NoteModule-6b0774bf3359d0a136053b0c88808043aea9fafedded731c6e0f530c9c7cea0ccdd2c0ea52e3a6918e59382b46bf604c6a005f4ea6bd030c0cc0e44d30307ecf"' : 'data-bs-target="#xs-injectables-links-module-NoteModule-6b0774bf3359d0a136053b0c88808043aea9fafedded731c6e0f530c9c7cea0ccdd2c0ea52e3a6918e59382b46bf604c6a005f4ea6bd030c0cc0e44d30307ecf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NoteModule-6b0774bf3359d0a136053b0c88808043aea9fafedded731c6e0f530c9c7cea0ccdd2c0ea52e3a6918e59382b46bf604c6a005f4ea6bd030c0cc0e44d30307ecf"' :
                                        'id="xs-injectables-links-module-NoteModule-6b0774bf3359d0a136053b0c88808043aea9fafedded731c6e0f530c9c7cea0ccdd2c0ea52e3a6918e59382b46bf604c6a005f4ea6bd030c0cc0e44d30307ecf"' }>
                                        <li class="link">
                                            <a href="injectables/NoteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaginationModule.html" data-type="entity-link" >PaginationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaginationModule-ac6fcdd2e7a688b798135cfc37096fd2c3e8bca218da824d4a4b56785f9835fbac112fbbadc8d1098234a077abd1d82f05de0058f19ee8f9a1742a64e9d5130b"' : 'data-bs-target="#xs-injectables-links-module-PaginationModule-ac6fcdd2e7a688b798135cfc37096fd2c3e8bca218da824d4a4b56785f9835fbac112fbbadc8d1098234a077abd1d82f05de0058f19ee8f9a1742a64e9d5130b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaginationModule-ac6fcdd2e7a688b798135cfc37096fd2c3e8bca218da824d4a4b56785f9835fbac112fbbadc8d1098234a077abd1d82f05de0058f19ee8f9a1742a64e9d5130b"' :
                                        'id="xs-injectables-links-module-PaginationModule-ac6fcdd2e7a688b798135cfc37096fd2c3e8bca218da824d4a4b56785f9835fbac112fbbadc8d1098234a077abd1d82f05de0058f19ee8f9a1742a64e9d5130b"' }>
                                        <li class="link">
                                            <a href="injectables/PaginationProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoleModule.html" data-type="entity-link" >RoleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RoleModule-13926c98395f46347bb4eba9ff056049d905f63281573a0d97059177101f6e5e49d1fefd504e0f4daee925f1be06c7cc859c855d561ad166f618210bffeb66ad"' : 'data-bs-target="#xs-controllers-links-module-RoleModule-13926c98395f46347bb4eba9ff056049d905f63281573a0d97059177101f6e5e49d1fefd504e0f4daee925f1be06c7cc859c855d561ad166f618210bffeb66ad"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RoleModule-13926c98395f46347bb4eba9ff056049d905f63281573a0d97059177101f6e5e49d1fefd504e0f4daee925f1be06c7cc859c855d561ad166f618210bffeb66ad"' :
                                            'id="xs-controllers-links-module-RoleModule-13926c98395f46347bb4eba9ff056049d905f63281573a0d97059177101f6e5e49d1fefd504e0f4daee925f1be06c7cc859c855d561ad166f618210bffeb66ad"' }>
                                            <li class="link">
                                                <a href="controllers/RoleController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RoleModule-13926c98395f46347bb4eba9ff056049d905f63281573a0d97059177101f6e5e49d1fefd504e0f4daee925f1be06c7cc859c855d561ad166f618210bffeb66ad"' : 'data-bs-target="#xs-injectables-links-module-RoleModule-13926c98395f46347bb4eba9ff056049d905f63281573a0d97059177101f6e5e49d1fefd504e0f4daee925f1be06c7cc859c855d561ad166f618210bffeb66ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RoleModule-13926c98395f46347bb4eba9ff056049d905f63281573a0d97059177101f6e5e49d1fefd504e0f4daee925f1be06c7cc859c855d561ad166f618210bffeb66ad"' :
                                        'id="xs-injectables-links-module-RoleModule-13926c98395f46347bb4eba9ff056049d905f63281573a0d97059177101f6e5e49d1fefd504e0f4daee925f1be06c7cc859c855d561ad166f618210bffeb66ad"' }>
                                        <li class="link">
                                            <a href="injectables/RoleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpeciesModule.html" data-type="entity-link" >SpeciesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SpeciesModule-3dd68c70534ff9105b70bab3fc87c92721883651531ec3e747bd7941194e5521b4c205a0e359d17ee15913d9cb40b83adc1700e3eea4afc1de6e69535a07d76a"' : 'data-bs-target="#xs-controllers-links-module-SpeciesModule-3dd68c70534ff9105b70bab3fc87c92721883651531ec3e747bd7941194e5521b4c205a0e359d17ee15913d9cb40b83adc1700e3eea4afc1de6e69535a07d76a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SpeciesModule-3dd68c70534ff9105b70bab3fc87c92721883651531ec3e747bd7941194e5521b4c205a0e359d17ee15913d9cb40b83adc1700e3eea4afc1de6e69535a07d76a"' :
                                            'id="xs-controllers-links-module-SpeciesModule-3dd68c70534ff9105b70bab3fc87c92721883651531ec3e747bd7941194e5521b4c205a0e359d17ee15913d9cb40b83adc1700e3eea4afc1de6e69535a07d76a"' }>
                                            <li class="link">
                                                <a href="controllers/SpeciesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpeciesController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SymbolModule.html" data-type="entity-link" >SymbolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SymbolModule-3c2cd7c247da25fff78c06034c727f133462383e92db271a2d9d11da3fdce2bbe79bdccca554e522bedbef651cb46881caf4a3433430888eebde2b50797179fa"' : 'data-bs-target="#xs-controllers-links-module-SymbolModule-3c2cd7c247da25fff78c06034c727f133462383e92db271a2d9d11da3fdce2bbe79bdccca554e522bedbef651cb46881caf4a3433430888eebde2b50797179fa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SymbolModule-3c2cd7c247da25fff78c06034c727f133462383e92db271a2d9d11da3fdce2bbe79bdccca554e522bedbef651cb46881caf4a3433430888eebde2b50797179fa"' :
                                            'id="xs-controllers-links-module-SymbolModule-3c2cd7c247da25fff78c06034c727f133462383e92db271a2d9d11da3fdce2bbe79bdccca554e522bedbef651cb46881caf4a3433430888eebde2b50797179fa"' }>
                                            <li class="link">
                                                <a href="controllers/SymbolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SymbolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SymbolModule-3c2cd7c247da25fff78c06034c727f133462383e92db271a2d9d11da3fdce2bbe79bdccca554e522bedbef651cb46881caf4a3433430888eebde2b50797179fa"' : 'data-bs-target="#xs-injectables-links-module-SymbolModule-3c2cd7c247da25fff78c06034c727f133462383e92db271a2d9d11da3fdce2bbe79bdccca554e522bedbef651cb46881caf4a3433430888eebde2b50797179fa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SymbolModule-3c2cd7c247da25fff78c06034c727f133462383e92db271a2d9d11da3fdce2bbe79bdccca554e522bedbef651cb46881caf4a3433430888eebde2b50797179fa"' :
                                        'id="xs-injectables-links-module-SymbolModule-3c2cd7c247da25fff78c06034c727f133462383e92db271a2d9d11da3fdce2bbe79bdccca554e522bedbef651cb46881caf4a3433430888eebde2b50797179fa"' }>
                                        <li class="link">
                                            <a href="injectables/SymbolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SymbolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-84b0ad491b6ae54db19ea9dba12b910c2e1e3e4742cbc4951d9f2e1bc5dc5cec7fc647bf0c718098e7e1be51a43ca39c8fcf31c9b50760dbd3f9726b6db0b89e"' : 'data-bs-target="#xs-controllers-links-module-UserModule-84b0ad491b6ae54db19ea9dba12b910c2e1e3e4742cbc4951d9f2e1bc5dc5cec7fc647bf0c718098e7e1be51a43ca39c8fcf31c9b50760dbd3f9726b6db0b89e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-84b0ad491b6ae54db19ea9dba12b910c2e1e3e4742cbc4951d9f2e1bc5dc5cec7fc647bf0c718098e7e1be51a43ca39c8fcf31c9b50760dbd3f9726b6db0b89e"' :
                                            'id="xs-controllers-links-module-UserModule-84b0ad491b6ae54db19ea9dba12b910c2e1e3e4742cbc4951d9f2e1bc5dc5cec7fc647bf0c718098e7e1be51a43ca39c8fcf31c9b50760dbd3f9726b6db0b89e"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-84b0ad491b6ae54db19ea9dba12b910c2e1e3e4742cbc4951d9f2e1bc5dc5cec7fc647bf0c718098e7e1be51a43ca39c8fcf31c9b50760dbd3f9726b6db0b89e"' : 'data-bs-target="#xs-injectables-links-module-UserModule-84b0ad491b6ae54db19ea9dba12b910c2e1e3e4742cbc4951d9f2e1bc5dc5cec7fc647bf0c718098e7e1be51a43ca39c8fcf31c9b50760dbd3f9726b6db0b89e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-84b0ad491b6ae54db19ea9dba12b910c2e1e3e4742cbc4951d9f2e1bc5dc5cec7fc647bf0c718098e7e1be51a43ca39c8fcf31c9b50760dbd3f9726b6db0b89e"' :
                                        'id="xs-injectables-links-module-UserModule-84b0ad491b6ae54db19ea9dba12b910c2e1e3e4742cbc4951d9f2e1bc5dc5cec7fc647bf0c718098e7e1be51a43ca39c8fcf31c9b50760dbd3f9726b6db0b89e"' }>
                                        <li class="link">
                                            <a href="injectables/CreateUserProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindOneUserByEmailProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindOneUserByEmailProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/XrefModule.html" data-type="entity-link" >XrefModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-XrefModule-15ed37f84d0130f318cb9be48374bc51fc86c62041a66f2c94350bdb7a88947c24605a6297ddd64595bf16e07faa26e9652b044ed446ae2276655d27ef9e6470"' : 'data-bs-target="#xs-controllers-links-module-XrefModule-15ed37f84d0130f318cb9be48374bc51fc86c62041a66f2c94350bdb7a88947c24605a6297ddd64595bf16e07faa26e9652b044ed446ae2276655d27ef9e6470"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-XrefModule-15ed37f84d0130f318cb9be48374bc51fc86c62041a66f2c94350bdb7a88947c24605a6297ddd64595bf16e07faa26e9652b044ed446ae2276655d27ef9e6470"' :
                                            'id="xs-controllers-links-module-XrefModule-15ed37f84d0130f318cb9be48374bc51fc86c62041a66f2c94350bdb7a88947c24605a6297ddd64595bf16e07faa26e9652b044ed446ae2276655d27ef9e6470"' }>
                                            <li class="link">
                                                <a href="controllers/XrefController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >XrefController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-XrefModule-15ed37f84d0130f318cb9be48374bc51fc86c62041a66f2c94350bdb7a88947c24605a6297ddd64595bf16e07faa26e9652b044ed446ae2276655d27ef9e6470"' : 'data-bs-target="#xs-injectables-links-module-XrefModule-15ed37f84d0130f318cb9be48374bc51fc86c62041a66f2c94350bdb7a88947c24605a6297ddd64595bf16e07faa26e9652b044ed446ae2276655d27ef9e6470"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-XrefModule-15ed37f84d0130f318cb9be48374bc51fc86c62041a66f2c94350bdb7a88947c24605a6297ddd64595bf16e07faa26e9652b044ed446ae2276655d27ef9e6470"' :
                                        'id="xs-injectables-links-module-XrefModule-15ed37f84d0130f318cb9be48374bc51fc86c62041a66f2c94350bdb7a88947c24605a6297ddd64595bf16e07faa26e9652b044ed446ae2276655d27ef9e6470"' }>
                                        <li class="link">
                                            <a href="injectables/XrefService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >XrefService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Assembly.html" data-type="entity-link" >Assembly</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ExternalResource.html" data-type="entity-link" >ExternalResource</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Gene.html" data-type="entity-link" >Gene</a>
                                </li>
                                <li class="link">
                                    <a href="entities/GeneHistory.html" data-type="entity-link" >GeneHistory</a>
                                </li>
                                <li class="link">
                                    <a href="entities/GeneLocusType.html" data-type="entity-link" >GeneLocusType</a>
                                </li>
                                <li class="link">
                                    <a href="entities/GeneName.html" data-type="entity-link" >GeneName</a>
                                </li>
                                <li class="link">
                                    <a href="entities/GeneNote.html" data-type="entity-link" >GeneNote</a>
                                </li>
                                <li class="link">
                                    <a href="entities/GeneReplacement.html" data-type="entity-link" >GeneReplacement</a>
                                </li>
                                <li class="link">
                                    <a href="entities/GeneSymbol.html" data-type="entity-link" >GeneSymbol</a>
                                </li>
                                <li class="link">
                                    <a href="entities/GeneXref.html" data-type="entity-link" >GeneXref</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Location.html" data-type="entity-link" >Location</a>
                                </li>
                                <li class="link">
                                    <a href="entities/LocusGroup.html" data-type="entity-link" >LocusGroup</a>
                                </li>
                                <li class="link">
                                    <a href="entities/LocusType.html" data-type="entity-link" >LocusType</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Name.html" data-type="entity-link" >Name</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Note.html" data-type="entity-link" >Note</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Role.html" data-type="entity-link" >Role</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Species.html" data-type="entity-link" >Species</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Symbol.html" data-type="entity-link" >Symbol</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Xref.html" data-type="entity-link" >Xref</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/PaginationDto.html" data-type="entity-link" >PaginationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SigninDto.html" data-type="entity-link" >SigninDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BcryptProvider.html" data-type="entity-link" >BcryptProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataResponseInterceptor.html" data-type="entity-link" >DataResponseInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HashingProvider.html" data-type="entity-link" >HashingProvider</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AccessTokenGuard.html" data-type="entity-link" >AccessTokenGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/MasterRoleGuard.html" data-type="entity-link" >MasterRoleGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RoleGuard.html" data-type="entity-link" >RoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ActiveUserInterface.html" data-type="entity-link" >ActiveUserInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Paginated.html" data-type="entity-link" >Paginated</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});