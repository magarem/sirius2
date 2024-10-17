import yaml from 'js-yaml';
import { defineEventHandler, readBody, sendError } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    // Lendo o corpo da requisição (espera-se que contenha a string YAML)
    const body = await readBody(event);

    if (!body.yamlString) {
      return sendError(event, new Error('Por favor, forneça a string YAML no corpo da requisição.'));
    }
    console.log(body.yamlString);
    // Convertendo a string YAML para JSON
    const jsonObject = await yaml.load(body.yamlString);
    console.log("jsonObject", jsonObject)
    // Retornando o objeto JSON como resposta
    return {
      success: true,
      data: JSON.stringify(jsonObject)
    };
  } catch (error) {
    return sendError(event, new Error(`Erro ao converter YAML para JSON: ${error.message}`));
  }
});
