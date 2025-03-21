export function getImageUrl(bucket: string, id: number | string): string {
  return `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/${bucket}/${String(
    id
  )}.png`;
}
