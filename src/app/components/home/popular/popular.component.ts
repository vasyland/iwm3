import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent {

  constructor(private route: Router, private activatedRoute: ActivatedRoute){}

  navigateCourses(): void {
    this.route.navigate(['/courses'], {relativeTo: this.activatedRoute});
    // this.route.navigateByUrl('courses');
    console.log("To courses clicked.");
  }

}
