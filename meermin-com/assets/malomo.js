let classback = function() {
  let url = new URL(document.URL);
  
  url.searchParams.append(`_m_id`, resp.body['id']);
             
  window.location.href = url;
}

let element = elements.create('shipmentTracker', {callback: callback});

element.mount('#order-lookup');