import { Group } from '../../objects/Group';
import { Camera } from '../../cameras/Camera';
import { EventDispatcher } from '../../core/EventDispatcher';

export class WebXRManager extends EventDispatcher {

	constructor( renderer: any, gl: WebGLRenderingContext );

	/**
	 * @default false
	 */
	enabled: boolean;

	/**
	 * @default false
	 */
	isPresenting: boolean;

	getController( id: number ): Group;
	getControllerGrip( id: number ): Group;
	setFramebufferScaleFactor( value: number ): void;
	setReferenceSpaceType( value: string ): void;
	getReferenceSpace(): any;
	getSession(): any;
	setSession( value: any ): void;
	getCamera( camera: Camera ): Camera;
	setAnimationLoop( callback: Function ): void;
	dispose(): void;

}
