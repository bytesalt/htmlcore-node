import { BaseModule } from '..';
import { ETHStateProvider } from './api/csp';
import { EthRoutes } from './api/eth-routes';
import { EthP2pWorker } from './p2p/p2p';
import { EthVerificationPeer } from './p2p/EthVerificationPeer';

export default class ETHModule extends BaseModule {
  constructor(services: BaseModule['htmlcoreServices']) {
    super(services);
    services.P2P.register('ETH', EthP2pWorker);
    services.CSP.registerService('ETH', new ETHStateProvider());
    services.Api.app.use(EthRoutes);
    services.Verification.register('ETH', EthVerificationPeer);
  }
}
