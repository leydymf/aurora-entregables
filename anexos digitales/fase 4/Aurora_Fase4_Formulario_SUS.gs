// Aurora — Formulario de la evaluación de usabilidad (SUS)
// Cómo usarlo:
// 1. Entra a https://script.google.com con tu cuenta de Google y crea un proyecto nuevo.
// 2. Borra el código de ejemplo, pega todo este archivo y guarda.
// 3. Elige la función crearFormularioAurora y pulsa «Ejecutar». La primera vez Google pide permisos.
// 4. En «Registro de ejecución» aparecen los enlaces del formulario y de la hoja de respuestas.
// Ejecútalo una sola vez: cada ejecución crea un formulario nuevo.

function crearFormularioAurora() {
  var form = FormApp.create('Aurora — Evaluación de usabilidad');
  form.setDescription('Gracias por participar en la evaluación de Aurora, un prototipo de aplicación móvil desarrollado como trabajo de grado de Ingeniería de Sistemas en la Universidad Autónoma de Bucaramanga.');
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setShuffleQuestions(false);
  form.setProgressBar(true);
  form.setAllowResponseEdits(false);
  form.setConfirmationMessage('Gracias por participar. Avísale a la investigadora que terminaste.');

  // Página 1. Consentimiento en una sola tarjeta, con un subtítulo por tema
  form.addSectionHeaderItem()
    .setTitle('Consentimiento informado')
    .setHelpText([
      'Te invito a participar en la evaluación de una aplicación móvil desarrollada como trabajo de grado de Ingeniería de Sistemas en la Universidad Autónoma de Bucaramanga, por Leydy Yohana Macareo Fuentes, bajo la dirección de Verónica Chajín Ortiz.',
      'Qué harás\nUsarás la aplicación en un teléfono de la investigadora para hacer siete tareas cortas, como si fueras una persona inventada. Después responderás un cuestionario de diez afirmaciones y tres preguntas abiertas. La sesión dura unos 30 minutos.',
      'Sobre el contenido\nLa aplicación trata sobre violencia de género. No se te preguntará por experiencias personales y todos los datos que escribirás en la aplicación son inventados. Si en algún momento te sientes incómoda, puedes parar.',
      'Tu participación es voluntaria\nPuedes no participar o retirarte en cualquier momento, sin dar explicaciones y sin ninguna consecuencia.',
      'Tus datos\nTu nombre se pide solo para organizar las respuestas y no aparecerá en los resultados, que se presentarán agrupados. No se tomarán fotos, videos ni grabaciones. La información se usará solo con fines académicos, conforme a la ley de protección de datos personales (Ley 1581 de 2012).',
      'Contacto\nSi tienes preguntas, puedes escribir a la investigadora al correo leydymacareo08@gmail.com.'
    ].join('\n\n'));
  form.addCheckboxItem()
    .setTitle('He leído esta información, mis preguntas fueron respondidas y acepto participar de forma voluntaria. Declaro que soy mayor de edad.')
    .setChoiceValues(['Sí, acepto participar'])
    .setRequired(true);

  // Página 2. Datos generales
  form.addPageBreakItem().setTitle('Tus datos');
  form.addTextItem()
    .setTitle('Nombre completo')
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Edad')
    .setChoiceValues(['18 a 20', '21 a 23', '24 a 26', '27 o más'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Tu teléfono es')
    .setChoiceValues(['Android', 'iPhone', 'Otro'])
    .setRequired(true);

  // Página 3. Tareas: datos de prueba, persona simulada y lista para marcar
  form.addPageBreakItem()
    .setTitle('Tareas en la aplicación')
    .setHelpText('Ahora toma el teléfono de la investigadora y haz las tareas en orden. Deja esta página abierta: aquí tienes los datos que vas a necesitar. Cuando termines todas las tareas, pulsa «Siguiente» para responder el cuestionario.');
  // La tabla de datos es una imagen que se agrega a mano debajo de este bloque (Aurora_SUS_datos_de_prueba.png)
  form.addSectionHeaderItem()
    .setTitle('Datos para usar en la aplicación')
    .setHelpText('Todos estos datos son de prueba. No escribas en la aplicación información real tuya ni de otras personas.');
  form.addSectionHeaderItem()
    .setTitle('La persona que vas a representar')
    .setHelpText([
      'Valentina, 22 años, vive en Floridablanca. Estudia y trabaja medio tiempo. Desde hace unos meses su pareja revisa su teléfono, le pide las contraseñas de sus redes sociales y se enoja si sale con sus amigas. Le escribe muchas veces al día para saber dónde está. Nunca la ha golpeado, pero a veces la insulta cuando discuten. Valentina no está segura de si lo que vive es violencia.',
      'Hecho para registrar\nEl 3 de octubre, su pareja le quitó el teléfono, leyó sus conversaciones y le dijo que si volvía a hablar con un compañero de clase iba a terminar con ella. Tipo: violencia psicológica.'
    ].join('\n\n'));
  form.addCheckboxItem()
    .setTitle('Marca cada tarea cuando la termines')
    .setHelpText('No hay respuestas buenas ni malas: si algo no te sale, es un problema de la aplicación y nos sirve saberlo.')
    .setChoiceValues([
      '1. Busca la ciudad de Bucaramanga y mira el pronóstico de los próximos cinco días.',
      '2. Escribe el código de activación en el buscador de ciudades. Avanza desde la bienvenida, acepta el consentimiento, crea tu cuenta con el correo y la contraseña de arriba, y crea tu código de acceso.',
      '3. Sigue los ocho pasos de «Cómo usar Aurora». En el paso 8, toca la nube para salir al clima y vuelve a entrar con tu código de acceso, hasta que aparezca la pantalla «¡Listo!».',
      '4. Busca qué es la violencia psicológica y a qué entidad podría acudir Valentina en Floridablanca para pedir medidas de protección.',
      '5. Responde el cuestionario de la aplicación como si fueras Valentina, mira el resultado y guárdalo.',
      '6. Anota en tu registro el hecho de Valentina, con la fecha, el tipo y una descripción corta, y adjunta la imagen de prueba de la galería.',
      '7. Exporta ese registro a un archivo PDF protegido con la contraseña de arriba.'
    ])
    .setRequired(false);

  // Página 4. Cuestionario SUS
  form.addPageBreakItem()
    .setTitle('Cuestionario')
    .setHelpText('Marca qué tan de acuerdo estás con cada afirmación sobre la aplicación que acabas de usar. Responde todas, con tu primera impresión. Si no sabes qué responder en alguna, marca el 3.');
  var afirmaciones = [
    'Creo que me gustaría usar esta aplicación con frecuencia.',
    'Encontré la aplicación innecesariamente compleja.',
    'Pensé que la aplicación era fácil de usar.',
    'Creo que necesitaría el apoyo de personal experto para poder usar esta aplicación.',
    'Encontré que las diversas funciones de la aplicación estaban bien integradas.',
    'Pensé que había demasiada inconsistencia en la aplicación.',
    'Imagino que la mayoría de las personas aprenderían a usar esta aplicación muy rápidamente.',
    'Encontré la aplicación muy tediosa de usar.',
    'Me sentí con mucha confianza al usar la aplicación.',
    'Necesité aprender muchas cosas antes de poder empezar a usar esta aplicación.'
  ];
  afirmaciones.forEach(function (texto, i) {
    form.addScaleItem()
      .setTitle((i + 1) + '. ' + texto)
      .setBounds(1, 5)
      .setLabels('Totalmente en desacuerdo', 'Totalmente de acuerdo')
      .setRequired(true);
  });

  // Página 5. Preguntas abiertas
  form.addPageBreakItem().setTitle('Preguntas abiertas');
  [
    '¿Qué fue lo más difícil o confuso de usar la aplicación?',
    '¿Qué cambiarías o agregarías?',
    'Si otra persona tomara el teléfono, ¿crees que pensaría que es solo una aplicación de clima? ¿Por qué?'
  ].forEach(function (pregunta) {
    form.addParagraphTextItem().setTitle(pregunta).setRequired(false);
  });

  // Hoja de respuestas vinculada
  var hoja = SpreadsheetApp.create('Aurora — Respuestas SUS');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, hoja.getId());

  Logger.log('Formulario para responder: ' + form.getPublishedUrl());
  Logger.log('Formulario para editar: ' + form.getEditUrl());
  Logger.log('Hoja de respuestas: ' + hoja.getUrl());
}
