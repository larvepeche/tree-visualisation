function removeSpecialChar(txt) {
  return txt.replace(/}/g, "");
}
export function getAttributeValue(title, removeChar) {
  if (!title) {
    return;
  }
  const name = title.split(":");
  if (!name[2]) {
    console.log(title, " name not found");
    return title;
  }
  if (removeChar) {
    return removeSpecialChar(name[2]);
  }
  return name[2];
}
