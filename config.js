export const config = {
  domainSource: "https://2c48577f-6ece-45c4-9197-0fb036885fc0.weweb-preview.io", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/produto/[^/]+",
          metaDataEndpoint: "https://aszvggegvmuzybjdeftf.supabase.co/rest/v1/rpc/get_product_metadata?id={id}&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzenZnZ2Vndm11enliamRlZnRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNzY1MjksImV4cCI6MjA2Mzg1MjUyOX0.i1DNye0LpG6P33gFdtDiOKEjR6ffHnF-wGrpPTFyIsk"
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};
