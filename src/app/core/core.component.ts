import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.css',
})
export class CoreComponent implements OnInit, OnChanges, OnDestroy {
  name: string = 'test';
  content: string = 'test content';

  @Output() serverCreated: EventEmitter<{ name: string, content: string }> = new EventEmitter<{ name: string, content: string }>();
  @Output() bluePrintCreated: EventEmitter<{ name: string, content: string }> = new EventEmitter<{ name: string, content: string }>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log("From ngOnChanges function", changes);
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log("From ngOnInit function");
    // throw new Error('Method not implemented.');
  }

  onServerCreated() {
    console.log({ name: this.name, content: this.content });
    this.serverCreated.emit({ name: this.name, content: this.content });
  }

  onBluePrintCreated() {
    console.log({ name: this.name, content: this.content });
    this.bluePrintCreated.emit({ name: this.name, content: this.content });
  }

  ngOnDestroy(): void {
    console.log("From ngOnDestroy function");
    // throw new Error('Method not implemented.');
  }
}
