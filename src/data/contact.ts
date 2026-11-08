/*
  FORMULARIO DE CONTACTO (Web3Forms)
  ----------------------------------
  1. Crea una cuenta gratis en https://web3forms.com y pide tu "Access Key"
     (llega a tu correo).
  2. Pega la clave abajo, reemplazando el texto de ejemplo.

  La access key es PÚBLICA por diseño: va en el HTML del sitio y solo permite
  ENVIAR mensajes a tu correo; no da acceso a tu cuenta.
*/
export const PLACEHOLDER = 'PEGA_AQUI_TU_ACCESS_KEY';

export const web3formsAccessKey: string = '72e664d7-c8ee-4632-9571-d1a09b919571';

export const isWeb3formsConfigured = web3formsAccessKey !== PLACEHOLDER;
