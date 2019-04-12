import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() open = false;
  @Prop() transparent = false;

  public render() {
    return <div class={'overlay ' + (this.open ? 'is-visible' : '') + ' ' + (this.transparent ? 'is-transparent' : '')}>
      <div class="modal-window">
        <div class="modal-window__content"><slot></slot></div></div>
    </div>;
  }

}
