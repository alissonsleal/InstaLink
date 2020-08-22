let btn = document.createElement("a");
btn.innerHTML = `

InstaLink`;
btn.target = "_blank";
btn.id = "instaBtn";
btn.style.color = "#fe3c72";

let classes =
  "#content > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.profileCard.Pos\\(r\\).D\\(f\\).Ai\\(c\\).Fld\\(c\\).Expand--s.Mt\\(a\\) > div.Pos\\(r\\)--ml.Z\\(1\\).Bgc\\(\\#fff\\).Ov\\(h\\).Expand.profileContent.Bdrs\\(8px\\)--ml.Bxsh\\(\\$bxsh-card\\)--ml > div > div.Bgc\\(\\#fff\\).Fxg\\(1\\).Z\\(1\\).Pb\\(100px\\) > div.P\\(16px\\).Ta\\(start\\).Us\\(t\\).C\\(\\$c-secondary\\).BreakWord.Whs\\(pl\\).Fz\\(\\$ms\\) > div";

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
