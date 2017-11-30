function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll(".ranked-list");
  
  // why won't for...of work here?!
   for (let i = 0, rl = rankedLists.length; i < rl; i++) {
     let children = rankedLists[i].children;

   for (let j = 0, cl = children.length; j < cl; j++) {
     children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let node = document.getElementById("grand-node");
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}