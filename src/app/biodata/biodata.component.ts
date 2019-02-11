import { BiodataService } from './../biodata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.css']
})
export class BiodataComponent implements OnInit {

  Title: String;
  Tanggal: any;
  Hobbies: any[];
  Nama: String;
  Alamat: String;

  constructor(private bioServe:BiodataService) { }

  ngOnInit() {
    this.Title = "INI Tugas Pertama Biodata";
    this.Tanggal = Date.now();
    this.Nama = "Febri Toriqkhul Khoiri";
    this.Alamat = "Jl. Kelud";
    this.Hobbies = this.bioServe.getFebri();
  }

}
