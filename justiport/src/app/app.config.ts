import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { SpiService } from './spi.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AuthService } from './auth.service';


export const appConfig: ApplicationConfig = {
 providers: [provideRouter(routes),SpiService,importProvidersFrom(HttpClientModule),ApiService,Ng2SearchPipeModule,AuthService]
};
