import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';

import { Component, OnInit, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import {createGenericTestComponent} from '../../../test/common';

@Component({
  selector: 'st-test-component',
  template: ''
})
export class TestComponent {
  @ViewChild(AlertComponent) alertComponent: AlertComponent;

  closeAlert() {
  }
}

describe('AlertComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  const html = `
    <st-alert>
      <strong>Warning!</strong>Alert message!
    </st-alert>
  `;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, AlertComponent]
    });
  }));

  beforeEach(() => {
  });

  it('should create', () => {
    fixture = createGenericTestComponent(html, TestComponent);
    component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });


  it('should show contents around in alert tag', () => {
    fixture = createGenericTestComponent(html, TestComponent);

    const contentElement = fixture.debugElement.query(By.css('.alert-content')).nativeElement;
    expect(contentElement.textContent).toContain(`Alert message!`);
  });

  it('should get type property from html attribute', () => {

    const customFixture = createGenericTestComponent(`
      <st-alert type='success'>
        Message
      </st-alert>
    `, TestComponent);

    const contentElement = customFixture.debugElement.query(By.css('.alert-content')).nativeElement;
    expect(contentElement.classList).toContain('alert-success');
  });

  it('should remove close button if dismissible is false', () => {
    const customFixture = createGenericTestComponent(`
      <st-alert type='success' [dismissible]='false'>
        Message
      </st-alert>
    `, TestComponent);

    const button = customFixture.debugElement.query(By.css('button.close'));
    expect(button).toBeNull('hide close button');
  });

  it('should show close button if dismissible is true', () => {
    const customFixture = createGenericTestComponent(`
      <st-alert type='success' [dismissible]='true'>
        Message
      </st-alert>
    `, TestComponent);

    const button = customFixture.debugElement.query(By.css('button.close'));
    expect(button).not.toBeNull('show close button');
  });

  it('should show close button as default', () => {
    const customFixture = createGenericTestComponent(`
      <st-alert type='success'>
        Message
      </st-alert>
    `, TestComponent);

    const button = customFixture.debugElement.query(By.css('button.close'));
    expect(button).not.toBeNull('show close button');
  });

  it('should emit close event when clicking close button', () => {
    const customFixture = createGenericTestComponent(`
      <st-alert type='success' (close)="closeAlert()">
        Message
      </st-alert>
    `, TestComponent);

    const spy = spyOn(customFixture.componentInstance, 'closeAlert');

    const button = customFixture.debugElement.query(By.css('button.close')).nativeElement;
    button.click();

    expect(spy).toHaveBeenCalled();
  });


  it('should add alert-dismissible class when dismissible is true', () => {
    const customFixture = createGenericTestComponent(`
      <st-alert type='success'>
        Message
      </st-alert>
    `, TestComponent);

    const container = customFixture.debugElement.query(By.css('.alert-content')).nativeElement;
    expect(container.classList).toContain('alert-dismissible');
  });

});
