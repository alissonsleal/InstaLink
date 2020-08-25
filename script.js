let btn = document.createElement("a");
btn.innerHTML = `

InstaLink`;
btn.target = "_blank";
btn.id = "instaBtn";
btn.style.color = "#fe3c72";

let classes =
  "div.P\\(16px\\).Ta\\(start\\).Us\\(t\\).C\\(\\$c-secondary\\).BreakWord.Whs\\(pl\\).Fz\\(\\$ms\\)";

let text = "";
let instaLink = "";
getSelectionText = () => {
  if (window.getSelection) {
    text = window.getSelection().toString();
    let instaLink = `https://instagram.com/${text}`;
    console.log(instaLink);
    btn.href = instaLink;
    document.querySelector(classes).appendChild(btn);
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  return instaLink;
};
document.ondblclick = getSelectionText;
