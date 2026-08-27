# How to Restore the Website

When your client is ready and you want to disable the "Website temporarily unavailable" maintenance page, you simply need to restore the `RootComponent` inside the `src/routes/__root.tsx` file.

### Instructions:
1. Open `src/routes/__root.tsx` in your editor.
2. Scroll to the bottom of the file to find the `RootComponent` function.
3. Replace the entire `RootComponent` function with the original code provided below.
4. Save the file, commit the change, and push to GitHub. Cloudflare will automatically deploy the full website again!

### Original Code to Restore:

```tsx
function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
        <FloatingWhatsApp />
      </div>
    </QueryClientProvider>
  );
}
```

**Alternative:** If you are using Antigravity, you can just tell the AI: *"The client is back, please restore the website using the code in RESTORE_WEBSITE.md"* and it will do this automatically for you!
