exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from ACE BIT Sindri! 🚀",
      timestamp: new Date().toISOString()
    })
  };
};
