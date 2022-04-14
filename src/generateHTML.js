function addEmployee(employee) {
    return `
    <section class='employee-card' id='${employee.employee}'>
        <h2>${employee.employee}</h2>
    </section>
    `;
};

function generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
    </head>
    <body>
        <header>
            <h1>My Employees</h1>
        </header>

        <main>
            <section class="employee-group" id="employee-group">
                ${addEmployee(data)}
            </section>
        </main>

        <footer>
            <script src=""></script>
        </footer>
    </body>
    </html>
    `;
};

module.exports = generateHTML;