import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  let page, component, element;

  beforeEach(async () => {
    page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    component = await page.find('my-component');
    element = await page.find('my-component >>> div');
  });

  it('renders', async () => {
    expect(component).toHaveClass('hydrated');
  });

  it('renders a div, decorated with a class, called overlay', async () => {
    expect(element).toHaveClass('overlay');
  });

  describe('open', () => {
    it('should add the is-visible class to the overlay', async () => {
      component.setProperty('open', true);
      await page.waitForChanges();

      expect(element).toHaveClass('is-visible');
    });

    it('should add the is-transparent class to the overlay, when the property is set', async () => {
      component.setProperty('open', true);
      component.setProperty('transparent', true);
      await page.waitForChanges();

      expect(element).toHaveClasses(['is-visible', 'is-transparent']);
    });
  });

  describe('close', () => {
    it('should remove the is-visible class from the overlay', async () => {
      component.setProperty('open', true);
      await page.waitForChanges();
      expect(element).toHaveClass('is-visible');

      component.setProperty('open', false);
      await page.waitForChanges();

      expect(element).not.toHaveClass('is-visible');
    });
  });
});
