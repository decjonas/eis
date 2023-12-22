document.addEventListener("DOMContentLoaded", function () {
    function generateRandomString(length) {
        const characters =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }
        return result;
    }

    let elementsWithStyle = document.querySelectorAll("[style]"),
        dynamicStylesheet = document.createElement("style");

    dynamicStylesheet.setAttribute("id", "eis-stylesheet");
    document.head.appendChild(dynamicStylesheet);

    elementsWithStyle.forEach((element) => {
        let randomString = generateRandomString(7);

        while (document.querySelector(`[data-eis="${randomString}"]`)) {
            randomString = generateRandomString(8);
        }

        element.setAttribute("data-eis", randomString);

        let currentStyles = dynamicStylesheet.innerText;
        dynamicStylesheet.textContent =
            currentStyles +
            `[data-eis="${randomString}"]{${element.getAttribute("style")}}`;

        element.removeAttribute("style");
    });

    let stylesheetContent = dynamicStylesheet.textContent;

    const replacements = [
        {
            pattern: /[\n\t ]{4,}/g,
            replacement: "",
        },
        {
            pattern: /@dark/g,
            replacement: "@media (prefers-color-scheme: dark)",
        },
        {
            pattern: /@(\d+)px\-/g,
            replacement: "@media (max-width: $1px)",
        },
        {
            pattern: /@(\d+)px\+/g,
            replacement: "@media (min-width: $1px)",
        },
    ];

    replacements.forEach(({ pattern, replacement }) => {
        stylesheetContent = stylesheetContent.replace(pattern, replacement);
    });

    dynamicStylesheet.textContent = stylesheetContent;
});
