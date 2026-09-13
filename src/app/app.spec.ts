import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should start at zero', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.textContent?.trim()).toBe('0');
  });

  it('should increment and prevent negative values', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const incrementButton = compiled.querySelectorAll('button')[0];
    const decrementButton = compiled.querySelectorAll('button')[1];

    incrementButton.click();
    incrementButton.click();
    decrementButton.click();
    decrementButton.click();
    decrementButton.click();
    fixture.detectChanges();

    expect(compiled.querySelector('div')?.textContent?.trim()).toBe('0');
  });
});
  