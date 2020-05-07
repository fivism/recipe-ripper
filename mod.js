// ==UserScript==
// @name         RecipeFilter by MIchael
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  force show recipe cards and blank everything else
// @author       fivism
// @match        *
// @grant        none
// ==/UserScript==

// Div possibilities
recipe_selectors = [
    '.recipe-callout',
    '.tasty-recipes',
    '.easyrecipe',
    '.innerrecipe',
    '.recipe-summary.wide', // thepioneerwoman.com
    '.wprm-recipe-container',
    '.recipe-content',
    '.simple-recipe-pro',
    'div[itemtype="http://schema.org/Recipe"]',
    'div[itemtype="https://schema.org/Recipe"]',
]

(function() {
    'use strict';

    function cleanUp(){
        recipe_selectors.every(function(s){
            let original = document.querySelector(s); // original recipe card div
            if (original){
                let clone = original.cloneNode(true);
                clone.id = '_rr_highlight';
                clone.style.transition = 'opacity 500ms';
                clone.style.display = 'block';
                clone.style.opacity = 0; // double check what this really means
                
                // insert the cloned recipe card
                document.body.insertBefore(clone, document.body.firstChild);
                
                window.setTimeout(() => {
                    clone.style.opacity = 1; // fade us in
                    document.scrollingElement.scrollTop = 0; // scroll top fix
                }, 10);

                return false;
            }
            return true;
        })
    }
    cleanUp();
})();