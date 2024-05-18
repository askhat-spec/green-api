const apiUrl = 'https://7103.api.greenapi.com';
const result = $('#result');

$('#getSettings').on('click', () => {
  // GET {{apiUrl}}/waInstance{{idInstance}}/getSettings/{{apiTokenInstance}}
  const idInstance = $('#idInstance').val();
  const apiToken = $('#apiToken').val();
  if (idInstance == '' || apiToken == '') {
    alert('Установите ID Инстанса и Ваш Токен')
  } else {
    $.ajax({
      url: `${apiUrl}/waInstance${idInstance}/getSettings/${apiToken}`,
      type: 'GET',
      cors: true,
      success: function(data) {
        result.val(JSON.stringify(data, null, 4));
      },
      error: function(xhr) {
        const errorMessage = {
          error: xhr.status,
          message: xhr.statusText,
        }
        result.val(JSON.stringify(errorMessage, null, 4));
      }
    });
  }
});

$('#getStateInstance').on('click', () => {
  // GET {{apiUrl}}/waInstance{{idInstance}}/getStateInstance/{{apiTokenInstance}}
  const idInstance = $('#idInstance').val();
  const apiToken = $('#apiToken').val();
  if (idInstance == '' || apiToken == '') {
    alert('Установите ID Инстанса и Ваш Токен')
  } else {
    $.ajax({
      url: `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiToken}`,
      type: 'GET',
      cors: true,
      success: function(data) {
        result.val(JSON.stringify(data, null, 4));
      },
      error: function(xhr) {
        const errorMessage = {
          error: xhr.status,
          message: xhr.statusText,
        }
        result.val(JSON.stringify(errorMessage, null, 4));
      }
    });
  }
});

$('#sendMessage').on('click', () => {
  // POST {{apiUrl}}/waInstance{{idInstance}}/sendMessage/{{apiTokenInstance}}
  const idInstance = $('#idInstance').val();
  const apiToken = $('#apiToken').val();
  const phoneNumber = $('#sendMessagePhone').val();
  const message = $('#message').val();

  const data = {
    chatId: phoneNumber + '@c.us',
    message: message
  }

  if (idInstance == '' || apiToken == '') {
    alert('Установите ID Инстанса и Ваш Токен')
  } else if (phoneNumber == '' || message == '') {
    alert('Заполните нужные поля!');
  } else {
    $.ajax({
      url: `${apiUrl}/waInstance${idInstance}/sendMessage/${apiToken}`,
      type: 'POST',
      cors: true,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: function(data) {
        result.val(JSON.stringify(data, null, 4));
      },
      error: function(xhr) {
        const errorMessage = {
          error: xhr.status,
          message: xhr.statusText,
        }
        result.val(JSON.stringify(errorMessage, null, 4));
      }
    });
  }
});


$('#sendFileByUrl').on('click', () => {
  // POST {{apiUrl}}/waInstance{{idInstance}}/sendFileByUrl/{{apiTokenInstance}}
  const idInstance = $('#idInstance').val();
  const apiToken = $('#apiToken').val();
  const phoneNumber = $('#sendFilePhone').val();
  const fileURL = $('#fileURL').val();

  const data = {
    chatId: phoneNumber + '@c.us',
    fileName: (Math.random() + 1).toString(36).substring(2),
    urlFile: fileURL
  }

  if (idInstance == '' || apiToken == '') {
    alert('Установите ID Инстанса и Ваш Токен')
  } else if (phoneNumber == '' || fileURL == '') {
    alert('Заполните нужные поля!');
  } else {
    $.ajax({
      url: `${apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiToken}`,
      type: 'POST',
      cors: true,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: function(data) {
        result.val(JSON.stringify(data, null, 4));
      },
      error: function(xhr) {
        const errorMessage = {
          error: xhr.status,
          message: xhr.statusText,
        }
        result.val(JSON.stringify(errorMessage, null, 4));
      }
    });
  }
});
