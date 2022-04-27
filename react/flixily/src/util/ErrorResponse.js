function errorResponse() {
  alert('Sorry, there was a server error. Please try again in a few minutes.');
  window.location.href = '/';
}

module.exports.errorResponse = errorResponse;
