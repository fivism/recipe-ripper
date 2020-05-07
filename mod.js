// div possibilities from https://github.com/sean-public/RecipeFilter
var recipe_selectors = [
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

function cleanUp(){
	recipe_selectors.every(function(s){
		
		let original = document.querySelector(s); // original recipe card div
		if (original){
			let clone = original.cloneNode(true);
			clone.id = '_rr_highlight';
			clone.style.display = 'block';
			clone.style.opacity = 1;

			// Quiet all body children
			var children = document.body.children;
			for (var i = 0; i < children.length; i++) {
				var tableChild = children[i];
				tableChild.style.display = 'none';
			}
			document.body.insertBefore(clone, document.body.firstChild);

			return false;
		}

		return true;
	})}
cleanUp();
