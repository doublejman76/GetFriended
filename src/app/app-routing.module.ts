import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { SuggestedFriendsComponent } from './suggested-friends/suggested-friends.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'suggested-friends', component: SuggestedFriendsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'auth', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
