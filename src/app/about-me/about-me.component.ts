import { Component,HostListener } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  showDiv1: boolean = false;
  showDiv2: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;
    
    // Adjust these values as needed based on when you want the animation to trigger
    const triggerOffset1 = windowHeight * 0.5; // Trigger when the window is halfway through the first div
    const triggerOffset2 = windowHeight * 0.7; // Trigger when the window is 70% through the second div

    // Check if the scroll position is greater than the trigger offsets
    this.showDiv1 = scrollPosition > triggerOffset1;
    this.showDiv2 = scrollPosition > triggerOffset2;
  }
}
