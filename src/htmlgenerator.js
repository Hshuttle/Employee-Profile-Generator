function generateFrame(Team) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sample HTML</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Employee Profile Generator</h1>
        <p class="lead"></p>
      </div>
    </div>
    <div class="row">
      <div class="card manager" style="width: 30rem">
        <div class="card-body">
          <h5 class="card-title">${Team[0].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
          <p class="card-text">
            <ul>
              <li>Id: ${Team[0].id}</li>
              <li>Email: ${Team[0].email}</li>
              <li>Phone: ${Team[0].phone}</li>
            </ul>
          </p>
          <a href="${Team[0].email}" class="card-link">Email</a>
        </div>
      </div>
      <div class="card engineer" style="width: 30rem">
        <div class="card-body">
          <h5 class="card-title">${Team[1].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
          <p class="card-text">
            <ul>
              <li>Id: ${Team[1].id}</li>
              <li>Email: ${Team[1].email}</li>
              <li>Github: ${Team[1].github}</li>
            </ul>
          </p>
          <a href="${Team[1].email}" class="card-link">Email</a>
          <a href=https://github.com/${Team[1].github}" class="card-link">Github</a>
        </div>
      </div>
      <div class="card intern" style="width: 30rem">
        <div class="card-body">
          <h5 class="card-title">${Team[2].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
          <p class="card-text">
            <ul>
              <li>Id: ${Team[2].id}</li>
              <li>Email: ${Team[2].email}</li>
              <li>School: ${Team[2].school}</li>
            </ul>
          </p>
          <a href="${Team[2].email}" class="card-link">Email</a>
        </div>
      </div>
    </div>
  </body>
</html>
`;
}

module.exports = generateFrame;
