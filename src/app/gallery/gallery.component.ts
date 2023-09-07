import { Component } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  public gallery:any = [];
  constructor(private _galleryService:GalleryService){
    _galleryService.getgallery().subscribe(
      (data:any)=>{
        this.gallery = data.data.memes;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

}
