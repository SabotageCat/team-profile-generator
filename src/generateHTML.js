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
    <section class='employee-card manager'>
        <h2>${manager.name}</h2>
        <h3>Manager</h3>
        <h4>ID: ${manager.id}</h4>
        <h4><a href='mailto:${manager.email}'>${manager.email}</a></h4>
        <h4>Office #: ${manager.officeNumber}</h4>
    </section>
    `;
}

engineer = (engineer) => {
    return `
    <section class='employee-card engineer''>
        <h2>${engineer.name}</h2>
        <h3>Engineer</h3>
        <h4>ID: ${engineer.id}</h4>
        <h4><a href='mailto:${engineer.email}'>${engineer.email}</a></h4>
        <h4><a href='https://github.com/${engineer.github}' target='_blank'>Github: ${engineer.github}</a></h4>
    </section>
    `;
}

intern = (intern) => {
    return `
    <section class='employee-card intern'>
        <h2>${intern.name}</h2>
        <h3>Intern</h3>
        <h4>ID: ${intern.id}</h4>
        <h4><a href='mailto:${intern.email}'>${intern.email}</a></h4>
        <h4>Alumni: ${intern.school}</h4>
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
        <title>My Team</title>
        <link rel='stylesheet' href='./style.css' />
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
    </body>
    </html>
    `;
};

module.exports = generateHTML;