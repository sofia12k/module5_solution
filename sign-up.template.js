<div class="container">
  <form ng-submit="$ctrl.submit()">
    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" ng-model="$ctrl.user.firstName" required>
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" ng-model="$ctrl.user.lastName" required>
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" ng-model="$ctrl.user.email" required>
    </div>
    <div class="form-group">
      <label>Phone Number</label>
      <input type="tel" class="form-control" ng-model="$ctrl.user.phone" required>
    </div>
    <div class="form-group">
      <label>Favorite Dish</label>
      <input type="text" class="form-control" ng-model="$ctrl.user.favoriteDish" required>
    </div>
    <button type="submit" class="btn btn-primary">Sign Up</button>
  </form>
  <div ng-if="$ctrl.success" class="alert alert-success">Your information has been saved.</div>
  <div ng-if="$ctrl.error" class="alert alert-danger">No such menu number exists.</div>
</div>
