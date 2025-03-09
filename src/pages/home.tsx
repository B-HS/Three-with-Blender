import { Button } from '@/components/ui/button'
import { ExternalLink, Youtube } from 'lucide-react'

const REFERENCE = [
    {
        title: '【初心者向け】世界一やさしいBlender入門！使い方＆導入〜画像作成までを徹底解説【最新版対応】',
        link: 'https://www.youtube.com/watch?v=S6aAvxUx2ko',
    },
]

export const Home = () => {
    return (
        <div className='flex flex-col gap-5 p-7'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-bold tracking-tight'>해피해피 Three와 Blender를 연습하는 페이지</h1>
                <p className='text-sm text-muted-foreground'>좌측 사이드바에 완성물 (light랑 camera는 되도록 Three에서 구현하는게 좋아보임)</p>
            </div>

            <div className='flex flex-col gap-5 w-full'>
                <h2 className='text-2xl font-bold tracking-tight' id='entries'>
                    참고 영상
                </h2>
                <div className='flex flex-col w-full'>
                    {REFERENCE.map(({ title, link }) => (
                        <div
                            key={title}
                            className='flex items-center justify-between p-2 border-border border rounded-sm hover:bg-secondary transition-all gap-7'>
                            <div className='flex items-center gap-2'>
                                <Youtube className='size-5 text-red-500' />
                                <span className='line-clamp-1'>{title}</span>
                            </div>
                            <Button variant='outline' size='sm' asChild>
                                <a href={link} target='_blank' rel='noopener noreferrer'>
                                    Watch <ExternalLink className='ml-1 size-3.5' />
                                </a>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
