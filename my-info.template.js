<div class="container" ng-if="$ctrl.user.firstName">
  <h2>My Information</h2>
  <p><strong>First Name:</strong> {{$ctrl.user.firstName}}</p>
  <p><strong>Last Name:</strong> {{$ctrl.user.lastName}}</p>
  <p><strong>Email:</strong> {{$ctrl.user.email}}</p>
  <p><strong>Phone:</strong> {{$ctrl.user.phone}}</p>
  <p><strong>Favorite Dish:</strong> {{$ctrl.user.favoriteDishDetails.name}}</p>
  <p><strong>Description:</strong> {{$ctrl.user.favoriteDishDetails.description}}</p>
  <img ng-src="{{ $ctrl.user.favoriteDishDetails.imageUrl }}" alt="{{ $ctrl.user.favoriteDishDetails.name }}">
</div>
<div class="container" ng-if="!$ctrl.user.firstName">
  <p>Not Signed Up Yet. <a ui-sref="public.signUp">Sign Up Now!</a></p>
</div>
