export const stripHTMLTags = (htmlString) => {
  return htmlString.replace(/<br>/g, "\n").replace(/<[^>]+>/g, "");
};

export const replaceMergeTags = (data, htmlString) => {
  Object.keys(data)?.forEach((key) => {
    let val = data[key];
    if (Array.isArray(val)) {
      val = `<ul>${val.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    }
    const regexPattern = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, "g");
    htmlString = htmlString.replace(regexPattern, val);
  });
  return htmlString;
};
