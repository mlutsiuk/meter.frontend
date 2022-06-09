<template>
    <v-container fluid>
        <v-alert
            type="error"
            outlined
        >
            <strong>Non Implemented</strong>
        </v-alert>

        <div>
            <h2 class="text-h2">Route: {{ $route.name }}</h2>

            <h5 class="text-h5 mt-5">Path: {{ $route.path }}</h5>
        </div>

        <v-divider class="mt-5 mb-5"/>

        <h4 class="text-h4 mb-2">All routes</h4>

        <v-simple-table class="mt-1">
            <thead>
            <tr>
                <th class="text-left">parentName</th>
                <th class="text-left">name</th>
                <th class="text-left">path</th>
                <th class="text-left">component</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="route in routes"
                :key="route.name"
            >
                <td>{{ route.parentName }}</td>
                <td
                    :class="{...routeNameClasses(route.name)}"
                >
                    {{ route.name }}
                </td>
                <td>{{ route.path }}</td>
                <td
                    :class="{...componentNameClasses(route.componentName)}"
                >
                    {{ route.componentName }}
                </td>
                <td>
                    <v-btn
                        @click="$router.push({ name: route.name })"
                        dense
                        outlined
                    >
                        go
                    </v-btn>
                </td>
            </tr>
            </tbody>
        </v-simple-table>

    </v-container>
</template>

<script>
export default {
    name: 'NonImplemented',
    data: () => ({
        routes: []
    }),
    methods: {
        componentNameClasses(componentName) {
            return componentName === this.$options.name
                ? { 'red--text': true, 'text--darken-1': true }
                : {};
        },
        routeNameClasses(routeName) {
            return routeName === this.$route.name
                ? { 'green--text': true, 'text--darken-1': true }
                : {};
        }
    },
    created() {
        let parseRoutes = (routes, parentName) => {
            routes.forEach(route => {
                this.routes.push({
                    parentName,

                    name: route.name,
                    path: route.path,
                    componentName: route.component.name
                    // childrenCount: route.children?.length ?? 0,
                });

                if ((route.children?.length ?? 0) > 0) {
                    parseRoutes(route.children, route.name);
                }
            });
        };

        parseRoutes(this.$router.options.routes);
    }
};
</script>