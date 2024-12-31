// Obfuscated email parts
const user = "tom";
const domain = "havemedoit";
const tld = "com";

// Combine parts to create the email
const email = `${user}@${domain}.${tld}`;

// Inject email as a clickable mailto link
const emailContainer = document.getElementById("email-container");
const emailLink = document.createElement("a"); // Create anchor tag
emailLink.href = `mailto:${email}`; // Set mailto link
emailLink.innerText = email; // Display the email text
emailContainer.appendChild(emailLink); // Add to page