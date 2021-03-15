function traducir(){
    const botonIdioma = document.querySelector('.btn-flotante');
    const notas = document.querySelectorAll('.aviso');
    const subtitulos= document.querySelectorAll('h5');
    const parrafoFormulario = document.querySelector('.parrafo-formu');
    const parrafos= document.querySelectorAll('ul p');
    const tramiteMigratorio=document.querySelector('#tramite-mig');
    const informacionLinks= document.querySelectorAll('.informacion a, .informacion h6');
    if (botonIdioma.textContent=='EN'){
        notas[0].innerHTML='Registration is open for foreign exchange students within the existing bilateral agreements to take degree subjects and/or participate in Investigation or Extension Projects.';
        notas[1].innerHTML='Important: Original documentation must be scanned and sent in a sole PDF file to internacionales@upso.edu.ar . Written, illegible or photocopy scanned documentation will not be accepted.Once the postulation has been approved by UPSO, the candidate must submit the next documentation in order to be definitely admitted:';
        subtitulos[0].innerHTML='Documentation needed to evaluate the candidate:';
        subtitulos[1].innerHTML='Enrollment and documentation reception’s deadline:';
        subtitulos[2].innerHTML='Relevant information:';
        parrafoFormulario.textContent='Admission request form for international students.';
        parrafos[0].innerHTML='Candidate’s admission request letter, including academic intentions and a brief personal introduction, written in Spanish.';
        parrafos[1].innerHTML='Exchange recommendation letter written by the exchange programs’ coordinator in their University.';
        parrafos[2].innerHTML='Curriculum Vitae/ Resumé';
        parrafos[3].innerHTML='Official analitical certificate from their home University.';
        parrafos[4].innerHTML='Detailed information about the academic activities to be done in UPSO.';
        parrafos[5].innerHTML='Spanish Certificate, in case of students coming from non-Spanish speaking countries. If the student doesn’t have that Certificate, he/she must take a Spanish course.';
        parrafos[6].innerHTML='Copy of passport.';
        parrafos[7].innerHTML='Brief clinic history and good health certificate.';
        parrafos[8].innerHTML='Enrollment in international life and health insurance.';
        parrafos[9].innerHTML='First semester (March to July) - November 30th from the previous year.';
        parrafos[10].innerHTML='Second semester (August to December) - June 15th from the actual year.';
        tramiteMigratorio.innerHTML="Immigration procedure: It is mandatory and must be completed within 30 days of the student's arrival in the country at the local Delegation of the National Directorate of Migration of Bahía Blanca.";
        informacionLinks[1].textContent='Academic Calendar';
        informacionLinks[3].textContent='International students';
        informacionLinks[4].innerHTML='Institutional Relations and Communication Secretariat';
        informacionLinks[6].innerHTML='Phone/Fax: +54 9 0291 4592581';
        botonIdioma.textContent='ES';
        
    }else{
        notas[0].innerHTML='Se encuentra abierta la inscripción para alumnos extranjeros de intercambio en el marco de los convenios bilaterales existentes para cursar materias de grado y/o participar de Proyectos de Investigación o de Extensión';
        notas[1].innerHTML='Nota: La documentación original deberá ser escaneada y enviada en un mismo archivo formato PDF por mail a internacionales@upso.edu.ar . No se aceptarán documentos escritos a mano, ilegibles o escaneo de fotocopias. Una vez aprobada la postulación por la Universidad Provincial del Sudoeste, el interesado deberá presentar la siguiente documentación para su admisión definitiva:';
        subtitulos[0].innerHTML='Documentacion a presentar:';
        subtitulos[1].innerHTML='Cierre de inscripción y de recepción de documentación:';
        subtitulos[2].innerHTML='Información Relevante:';
        parrafoFormulario.textContent='Formulario de solicitud de admisión para estudiantes internacionales.';
        parrafos[0].innerHTML='Carta de solicitud de admisión del postulante, incluyendo intenciones académicas y breve presentación personal, escrita en castellano.';
        parrafos[1].innerHTML='Carta de recomendación de intercambio realizada por el coordinador de intercambio en su universidad.';
        parrafos[2].innerHTML='Curriculum Vitae.';
        parrafos[3].innerHTML='Certificado analítico oficial de la universidad de origen.';
        parrafos[4].innerHTML='Explicitación de las actividades académicas seleccionadas a realizar en la UPSO.';
        parrafos[5].innerHTML='Certificación de idioma español, en caso de no provenir de países hispanohablantes. En caso de no poseer dicho certificado, el estudiante deberá tomar un curso de español.';
        parrafos[6].innerHTML='Copia de pasaporte.';
        parrafos[7].innerHTML='Breve historia clínica y certificado de buena salud.';
        parrafos[8].innerHTML='Inscripción al seguro de vida y de salud internacional.';
        parrafos[9].innerHTML='Primer semestre (marzo a julio) – 30 de noviembre del año anterior.';
        parrafos[10].innerHTML='Segundo semestre (agosto a diciembre) – 15 de junio del corriente año.';
        informacionLinks[1].textContent='Calendario Académico';
        informacionLinks[3].textContent='Oferta Académica';
        informacionLinks[4].innerHTML='Secretaría de Relaciones Institucionales y Comunicación';
        informacionLinks[6].innerHTML='Teléfono/ Fax: +54 9 0291 4592581';
        tramiteMigratorio.innerHTML='Trámite migratorio:Es obligatorio y se debe completar dentro de los 30 días desde la llegada al país del estudiante en la Delegación local de la Dirección Nacional de Migraciones de Bahía Blanca.';
        botonIdioma.textContent='EN'
    }
}

function toggleDropdown (e) {
    const _d = $(e.target).closest('.dropdown'),
      _m = $('.dropdown-menu', _d);
    setTimeout(function(){
      const shouldOpen = e.type !== 'click' && _d.is(':hover');
      _m.toggleClass('show', shouldOpen);
      _d.toggleClass('show', shouldOpen);
      $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
    }, e.type === 'mouseleave' ? 300 : 0);
  }
  
  $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);
