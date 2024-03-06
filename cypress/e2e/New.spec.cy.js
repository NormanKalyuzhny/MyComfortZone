describe('Epicentr', () => {

  it('kompyuternaya-i-ofisnaya-tekhnika page', () => {
      cy.viewport(1600, 900); 
      cy.visit('https://epicentrk.ua/ua/shop/kompyuternaya-i-ofisnaya-tekhnika/'); 
      cy.get('a[href="https://epicentrk.ua/ua/shop/noutbuki/"].shop-category__title.link.link--big.link--inverted.nc').click();
      cy.get('h1[class=nc]').should('be.visible');
      
});
});