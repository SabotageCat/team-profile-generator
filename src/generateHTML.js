function addEmployeeToHtml(employeeData) {
    let employeeCards = [];

    for (i = 0; i < employeeData.length; i++) {
        const employee = employeeData[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = manager(employee);

            employeeCards.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = engineer(employee);

            employeeCards.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = intern(employee);

            employeeCards.push(internCard);
        }
    };

    return employeeCards.join('')
};

manager = (manager) => {
    return `
    <section class='employee-card' id='manager'>
        <h2>${manager.name}</h2>
        <h3>ID: ${manager.id}</h3>
        <h3><a href='mailto:${manager.email}'>${manager.email}</a></h3>
        <h3>Office #: ${manager.officeNumber}</h3>
    </section>
    `;
}

engineer = (engineer) => {
    return `
    <section class='employee-card' id='engineer'>
        <h2>${engineer.name}</h2>
        <h3>ID: ${engineer.id}</h3>
        <h3><a href='mailto:${engineer.email}'>${engineer.email}</a></h3>
        <h3><a href='https://github.com/${engineer.github}'>Github: ${engineer.github}</a></h3>
    </section>
    `;
}

intern = (intern) => {
    return `
    <section class='employee-card' id='intern'>
        <h2>${intern.name}</h2>
        <h3>ID: ${intern.id}</h3>
        <h3><a href='mailto:${intern.email}'>${intern.email}</a></h3>
        <h3>Alumni: ${intern.school}</h3>
    </section>
    `;
}

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
                ${addEmployeeToHtml(data)}
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