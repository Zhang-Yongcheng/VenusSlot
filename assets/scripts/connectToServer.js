import { GameSrvBaseCmdLogic, LobbySrvCmdLogic, MainSrvCmdLogic } from './BaseCmdLogic';
import handleGameCommand from './handleGameCommand';
import PhotonController from './Photon_Interface';

export default function connectToServer(serverHost, serverPort, account, password,type) {
  const mainServer = new MainSrvCmdLogic(new PhotonController.PhotonIf('Ws', `${serverHost}:${serverPort}`));
  const lobbyServer = new LobbySrvCmdLogic(101, 1);
  const gameServer = new GameSrvBaseCmdLogic({});

  mainServer.SetLbSrvCmdLogicObj(lobbyServer);
  lobbyServer.SetGameSrvCmdLogicObj(gameServer);
  gameServer.SetGameCmdFunc(handleGameCommand);

  cc.store.mainServer = mainServer;
  cc.store.lobbyServer = lobbyServer;
  cc.store.gameServer = gameServer;

  mainServer.RunLogin(account, password,type);
}
