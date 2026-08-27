export const SITE_TITLE = 'HatoSec';
export const SITE_DESCRIPTION = 'Stay informed on the latest cyber security threats, tactics, and how to protect yourself online.';

export const AUDIENCES = [
	{ id: 'kids', range: '8-12', label: 'Kids', emoji: '🧒', description: 'Online safety basics — strangers, passwords, and healthy screen habits' },
	{ id: 'teens', range: '13-19', label: 'Teens', emoji: '🧑', description: 'Social media privacy, gaming scams, and digital footprint' },
	{ id: 'young-adults', range: '20-29', label: 'Young Adults', emoji: '👤', description: 'Phishing, account security, and safe online shopping' },
	{ id: 'adults', range: '30-59', label: 'Adults', emoji: '👨‍👩‍👧‍👦', description: 'Family protection, work-from-home security, and data privacy' },
	{ id: 'seniors', range: '60+', label: 'Seniors', emoji: '👴', description: 'Scam awareness, fraud prevention, and trusted browsing' },
] as const;

export function tagSlug(tag: string): string {
	return tag.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export function audienceBadge(audienceId: string): string {
	const a = AUDIENCES.find((a) => a.id === audienceId);
	return a?.range ?? audienceId;
}
