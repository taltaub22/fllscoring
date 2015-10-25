define('views/settings',[
    'services/log',
    'services/ng-stages',
    'services/ng-settings',
    'angular'
],function(log) {
    var moduleName = 'settings';
    return angular.module(moduleName,[]).controller(moduleName+'Ctrl',[
        '$scope', '$stages','$settings', '$q',
        function($scope, $stages, $settings, $q) {
            log('init settings ctrl');
            $scope.log = log.get();
            // initialize first tab
            $scope.tab = 1;

            $settings.init().then(function(res) {
                $scope.settings = res;
            });

            $scope.save = function() {
                return $q.all($settings.save(), $stages.save());
            };

            $scope.stageChanged = function() {
                // Dirty hack to update stages by simply 'reloading' them all
                var clone = $scope.allStages.slice();
                $stages.clear();
                clone.forEach(function(stage) { $stages.add(stage); });
            };

            $scope.allStages = $stages.allStages;
            $scope.rounds = [
                { id: 0, label: "(unused)" },
                { id: 1, label: "1" },
                { id: 2, label: "2" },
                { id: 3, label: "3" },
                { id: 4, label: "4" },
                { id: 5, label: "5" },
                { id: 6, label: "6" },
                { id: 7, label: "7" },
                { id: 8, label: "8" }
            ];
        }
    ]);
});
