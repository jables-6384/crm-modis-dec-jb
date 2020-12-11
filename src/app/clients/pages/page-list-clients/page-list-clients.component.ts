import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Client } from 'src/app/core/models/client';
import { ClientService } from 'src/app/core/services/client.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  public collection$: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>([]);
  public headers!: string[];
  public states = Object.values(StateClient);

  constructor(private clientService: ClientService, private cdr: ChangeDetectorRef) {
   // this.collection$ = this.clientService.collection$;
    this.headers = ['Action', 'Name', 'TVA', 'Total CA HT', 'Total CA TTC', 'Comment', 'State'];
    this.clientService.collection$.subscribe((data) => {
      this.collection$.next(data);
    });
  }

  ngOnInit(): void {}

  public changeState(item: Client, event: any): void {
    const state = event.target.value;
    this.clientService.changeState(item, state).subscribe((obj) => {
      item.state = obj.state;
      this.cdr.detectChanges();
    });
  }


  public delete(item: Client): void {
    this.clientService.delete(item).subscribe(() => {
      this.clientService.collection$.subscribe((data) => {
        this.collection$.next(data);
      });
    });
  }
}
