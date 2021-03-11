function traducir(){
    const botonIdioma = document.querySelector('.btn-flotante');
    const parrafo1= document.querySelector('.p1');
    const parrafo2= document.querySelector('.p2');
    const parrafo3= document.querySelector('.p3');
    if (botonIdioma.textContent == 'EN'){
        parrafo1.innerHTML='Universidad Provincial del Sudoeste (UPSO) is an institution which carries out a higher education program in 26 localities from the southwest of Buenos Aires Province: Carmen de Patagones, Villalonga, Pedro Luro, Hilario Ascasubi, Médanos, Punta Alta, Monte Hermoso,Coronel Dorrego, Tres Arroyos, Saldungaray, Sierra de la Ventana, Tornquist, Coronel Pringles, Laprida, General  La Madrid, Coronel Suárez, Pigüé, Darregueira,  Puan,  Carhué, Guaminí, Casbas, Daireaux, Salliqueló, Tres Lomas y Pellegrini.';        
        parrafo2.innerHTML='Our objective is to form graduates with an entrepreneur profile in different knowledge areas, seeking to promote local development in the interior of the province. The careers dictated by the UPSO rotate between the different venues in order to make it possible to provide the program with a variety of educational offerings in each location. We have a strategic alliance with Universidad Nacional del Sur (UNS), an institution with which we dictate different joint careers. Today we have more than 40 careers available.';
        parrafo3.innerHTML='Together, we pursue actions in order to support viable entrepreneurship projects arising from the students’ initiative. Similarly, we have multiple covenants with different Departments from the province southwest to collaborate in the Local Development Programs coordinated by the Centro de Emprendedurismo y Desarrollo Territorial Sostenible (CEDETS), which was created by the UPSO and the CIC.';
        botonIdioma.textContent='ES';
    }else{
        parrafo1.innerHTML='La Universidad Provincial del Sudoeste (UPSO) es una institución universitaria que lleva a cabo un programa de educación superior deslocalizada en 26 localidades del Sudoeste Bonaerense: Carmen de Patagones, Villalonga, Pedro Luro, Hilario Ascasubi, Médanos, Punta Alta, Monte Hermoso,Coronel Dorrego, Tres Arroyos, Saldungaray, Sierra de la Ventana, Tornquist, Coronel Pringles, Laprida, General  La Madrid, Coronel Suárez, Pigüé, Darregueira,  Puan,  Carhué, Guaminí, Casbas, Daireaux, Salliqueló, Tres Lomas y Pellegrini.';
        parrafo2.innerHTML='Nos proponemos formar graduados con perfil emprendedor en diferentes áreas de conocimiento, buscando propiciar el desarrollo local en el interior de la provincia. Las carreras dictadas por la UPSO rotan entre las distintas sedes a fin de posibilitar dotar al programa de una variedad en la oferta educativa de cada localidad. Poseemos una alianza estratégica con la Universidad Nacional del Sur (UNS), institución con la cual se llevan a cabo el dictado de diferentes carreras de gestión conjunta. En la actualidad, contamos con más de 40 carreras disponibles';
        parrafo3.innerHTML='Complementariamente, llevamos a cabo acciones dedicadas a apoyar los proyectos viables que surjan de la iniciativa de los alumnos, destinados a la creación de emprendimientos. De igual manera, se suscriben convenios con diferentes Municipios del Sudoeste Bonaerense con el objeto de colaborar con los mismos en Programas de Desarrollo Local que son coordinados por el Centro de Emprendedurismo y Desarrollo Territorial Sostenible (CEDETS) creado a través de un convenio entre la UPSO y la CIC.';
        botonIdioma.textContent='EN';
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
