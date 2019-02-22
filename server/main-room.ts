import { Client, Room } from 'colyseus';

class MainState {}
export class MainRoom extends Room<MainState> {
  // When room is initialized
  public onInit(options: any) {
    console.log('onInit', arguments);
    this.setState(new MainState());
  }

  // // When client successfully join the room
  // public onJoin(client: Client, options: any, auth: any) {
  //   console.log('onJoin', arguments);
  // }

  // When a client sends a message
  public onMessage(client: Client, message: string) {
    console.log('onMessage', arguments);
  }

  // // When a client leaves the room
  // public onLeave(client: Client, consented: boolean) {
  //   console.log('onLeave', arguments);
  // }

  // // Cleanup callback, called after there are no more clients in the room. (see `autoDispose`)
  // public onDispose() {
  //   console.log('onDispose', arguments);
  // }
}
