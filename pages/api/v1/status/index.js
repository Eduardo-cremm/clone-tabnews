function status(request, response) {
  response.status(200).json({ status: "Servidor funcionando corretamente" });
}

export default status;
