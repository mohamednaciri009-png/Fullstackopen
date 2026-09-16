const mail = "apple.pie@example.com";
const maskEmail = email => {
  const find = email.indexOf("@");
  const hidenPartOfEmail = email.slice(1,find-1);
const newEmail = email.replace(hidenPartOfEmail, "*".repeat(hidenPartOfEmail.length));
  console.log(newEmail);
}

maskEmail(mail);