import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })


export class HttpCalls{

    stranke_db = 'http://localhost:4201/stranke/';
    artikli_db = 'http://localhost:4201/artikli/';
    
    constructor(private http: HttpClient) {}

    // Calls for Stranka
    public GetStranke()
    {
        return this.http.request('get', this.stranke_db);
    }

    GetStrankaById(id : number)
    {
        return this.http.request('get', this.stranke_db + id); 
    }

    AddStranka(nova_stranka : object)
    {
        return this.http.request('post', this.stranke_db,  {body : nova_stranka}).subscribe();
    }

    UpdateStranka(id : number, update_stranka : object)
    {
        return this.http.request('put', this.stranke_db + id,  {body : update_stranka}).subscribe();
    }

    DeleteStranka(id : number)
    {
        return this.http.request('delete', this.stranke_db + id).subscribe();
    }


    // Calls for Artikel
    GetArtikli()
    {
        
        return this.http.request('get', this.artikli_db);
    }

    GetArtikelById(id : number)
    {
        return this.http.request('get', this.artikli_db + id); 
    }

    AddArtikel(nov_artikel : object)
    {
        return this.http.request('post', this.artikli_db,  {body : nov_artikel}).subscribe();
    }

    UpdateArtikel(id : number, update_artikel : object)
    {
        return this.http.request('put', this.artikli_db + id,  {body : update_artikel}).subscribe();
    }

    DeleteArtikel(id : number)
    {
        return this.http.request('delete', this.artikli_db + id).subscribe();
    }
}